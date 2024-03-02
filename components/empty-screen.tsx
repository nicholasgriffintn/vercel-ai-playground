import { Button } from '@/components/ui/button';
import { IconArrowRight } from '@/components/ui/icons';

const exampleMessages = [
  {
    heading: 'What is the most popular content?',
    message: 'What is the most popular content?',
  },
  {
    heading: 'What is the most popular content by region?',
    message: 'What is the most popular content by region?',
  },
  {
    heading: 'What is the most popular content by device?',
    message: 'What is the most popular content by device?',
  },
  {
    heading: 'What is the most popular content by age?',
    message: 'What is the most popular content by age?',
  },
];

export function EmptyScreen({
  submitMessage,
}: {
  submitMessage: (message: string) => void;
}) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8 mb-4">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to my Vercel AI Playground!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is a demo of an interactive analytics assistant. You can ask
          questions and get answers about your data.
        </p>
        <p className="leading-normal text-muted-foreground">Try an example:</p>
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={async () => {
                submitMessage(message.message);
              }}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
      <p className="leading-normal text-muted-foreground text-[0.8rem] text-center">
        Note: This is real information but 2 years out of date.
      </p>
    </div>
  );
}
