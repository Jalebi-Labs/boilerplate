import { GraphQLSchema, printSchema } from 'graphql'
import fs from 'fs';
import path from 'path';

import { rootQuery } from './rootQuery';

export const schema = new GraphQLSchema({
  query: rootQuery
})

async function writeSchema(
  schema: GraphQLSchema,
  name: string,
  outputPath: string,
): Promise<void> {
  console.log(`Writing ${name} SDL Schema to Disk`);
  fs.writeFileSync(outputPath, printSchema(schema));
  console.log(`Done writing ${name} SDL Schema to Disk`);
}

if (process.env.NODE_ENV === 'development') {
  // this runs from the `.next/` file, so we need to make sure
  // the path is correct relative to that directory
  writeSchema(schema, 'Main', path.resolve(__dirname, '../../../../schemas/main.graphql'));
}