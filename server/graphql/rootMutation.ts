import { GraphQLObjectType } from 'graphql'

import { Context } from './context';
import { UpdateUserMutation } from '@/server/modules/user/graphql/mutations/UpdateUserMutation';

export const rootMutation = new GraphQLObjectType<unknown, Context>({
  name: 'Mutation',
  fields: {
    updateUser: UpdateUserMutation
  }
})