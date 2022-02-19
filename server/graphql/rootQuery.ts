import { GraphQLObjectType, GraphQLString } from 'graphql'
import { ViewerSchema } from '@/server/modules/viewer/ViewerSchema';

import { Context } from './context';
ViewerSchema

export const rootQuery = new GraphQLObjectType<unknown, Context>({
  name: 'Query',
  fields: () => {
    return {
      viewer: {
        type: ViewerSchema,
        resolve: (_, __, context) => {
          if (!context.isUserLoggedIn) {
            return null
          }
          return {}
        }
      },
    }
  }
})