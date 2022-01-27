import { GraphQLSchema } from 'graphql'

import { rootQuery } from './rootQuery';

export const schema = new GraphQLSchema({
  query: rootQuery
})