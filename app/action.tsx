import 'server-only';

import { createAI, createStreamableUI, getMutableAIState } from 'ai/rsc';
import OpenAI from 'openai';
import { Code } from 'bright';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

import {
  spinner,
  BotCard,
  BotMessage,
  SystemMessage,
  Chart,
} from '@/components/llm';
import { runOpenAICompletion } from '@/lib/utils';
import { prompt } from '@/data/prompt';
import { queryDataParams } from '@/data/query-data-params';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

async function submitUserMessage(content: string) {
  'use server';

  try {
    const aiState = getMutableAIState<typeof AI>();
    aiState.update([
      ...aiState.get(),
      {
        role: 'user',
        content,
      },
    ]);

    const reply = createStreamableUI(
      <BotMessage className="items-center">{spinner}</BotMessage>
    );

    const completion = runOpenAICompletion(openai, {
      model: 'gpt-4-0125-preview',
      stream: true,
      messages: [
        {
          role: 'system',
          content: prompt,
        },
        ...aiState.get().map((info: any) => ({
          role: info.role,
          content: info.content,
          name: info.name,
        })),
      ],
      functions: [
        {
          name: 'query_data',
          description:
            "Get the results for a query against the user's events and properties",
          parameters: queryDataParams,
        },
      ],
      temperature: 0,
    });

    completion.onTextContent(async (content: string, isFinal: boolean) => {
      const file = await unified()
        .use(remarkParse) // Convert into markdown AST
        .use(remarkRehype) // Transform to HTML AST
        .use(rehypeSanitize) // Sanitize HTML input
        .use(rehypeStringify) // Convert AST into serialized HTML
        .process(content);

      const html = file.toString();
      reply.update(
        <BotMessage>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </BotMessage>
      );
      if (isFinal) {
        reply.done();
        aiState.done([...aiState.get(), { role: 'assistant', content }]);
      }
    });

    completion.onFunctionCall('query_data', async (input) => {
      const { format, title, timeField } = input;
      let query = input.query;

      // replace $sent_at with timestamp
      query = query.replace('$sent_at', 'timestamp');

      // replace `properties."timestamp"` with `timestamp`
      query = query.replace(/properties\."timestamp"/g, 'timestamp');

      // gpt may generate like AVG( instead of avg( - we need to replace the functions with their intended case

      const payload = {
        query: {
          kind: 'HogQLQuery',
          query,
        },
      };

      const res = await fetch(
        `https://us.posthog.com/api/projects/${process.env.POSTHOG_PROJECT_ID}/query/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        console.error('Error querying data', res);
        reply.done(
          <BotCard>
            <SystemMessage>
              <div>
                <p>Error querying data</p>
              </div>
            </SystemMessage>
          </BotCard>
        );
        return;
      }

      const queryRes = await res.json();

      reply.done(
        <BotCard>
          <SystemMessage>
            <div>
              <Chart
                chartType={format}
                queryResult={queryRes}
                title={title}
                timeField={timeField}
              />
              <div>
                <Code lang="sql">{query}</Code>
              </div>
            </div>
          </SystemMessage>
        </BotCard>
      );

      aiState.done([
        ...aiState.get(),
        {
          role: 'function',
          name: 'query_data',
          content: `[Results for query: ${query} with format: ${format} and title: ${title} with data ${queryRes.columns} ${queryRes.results}]`,
        },
      ]);
    });

    return {
      id: Date.now(),
      display: reply.value,
    };
  } catch (error) {
    console.error(error);

    return {};
  }
}

// Define necessary types and create the AI.

const initialAIState: {
  role: 'user' | 'assistant' | 'system' | 'function';
  content: string;
  id?: string;
  name?: string;
}[] = [];

const initialUIState: {
  id: number;
  display: React.ReactNode;
}[] = [];

export const AI = createAI({
  actions: {
    submitUserMessage,
  },
  initialUIState,
  initialAIState,
});
