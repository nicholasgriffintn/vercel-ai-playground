// Props to: https://github.com/RhysSullivan/hogchat for this prompt

import { z } from 'zod';

import {
  supportedAggregates,
  supportedFunctions,
} from '@/lib/posthog/supported';

export const chartTypes = ['table', 'chart', 'number'] as const;

export const queryDataParams = z.object({
  query: z.string().describe(`
  Creates a HogQL ClickHouse SQL Query for the given query.
  HogQL Rules:

  HogQL is based on ClickHouse SQL.
  
  The following ClickHouse functions are available:
  ${supportedFunctions.join(', ')}

  The following ClickHouse aggregate functions are available:
  ${supportedAggregates.join(', ')}
  
  Queries are case sensitive, respect the casing of the click house functions, properties and events.

  If an event or property name has a space, it should be wrapped in quotes.
  
  IMPORTANT: To filter to a specific event, use FROM events WHERE event = '{event_name}'
  The only table that exists is events, every query will select from events.
  
  To get events older than 5 days, use the expression:
  
  dateDiff('day', timestamp, now()) > 5
  
  IMPORTANT: Don't end queries with a semicolon.
    
  Use inclusive matching unless explicitly stated otherwise, i.e strings including the value rather than equal to
  For example, if you want to filter out all of Google events it would be: WHERE properties.{property_name} NOT LIKE '%Google%'
  
  Make comparisons case insensitive by using the ILIKE operator. For example, WHERE properties.{property_name} ILIKE '%google%'

  Timestamp is a DateTime type.
  
  To count the number of events, you can use countIf(event = '{event_name}')

  DO NOT USE BETWEEN for date ranges, it is not supported.

  If breaking down data that isn't a timeseries, order it by descending count.
  `),
  format: z.enum(chartTypes).describe('The format of the result'),
  title: z.string().optional().describe('The title of the chart'),
  timeField: z
    .string()
    .optional()
    .describe('If timeseries data, the column to use as the time field'),
});
