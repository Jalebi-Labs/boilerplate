import { GraphQLObjectType, GraphQLString } from 'graphql'

import { Context } from './context';

export const rootQuery = new GraphQLObjectType<unknown, Context>({
  name: 'Query',
  fields: () => {
    return {
      viewer: {
        type: GraphQLString,
        resolve: () => {
          return 'i am here'
        }
      }
    }
  }
})