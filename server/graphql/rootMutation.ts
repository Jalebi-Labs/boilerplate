import { GraphQLObjectType } from 'graphql'

import { Context } from './context';
import { UpdateUserMutation } from '../modules/user/mutations/UpdateUserMutation';

export const rootMutation = new GraphQLObjectType<unknown, Context>({
  name: 'Mutation',
  fields: {
    updateUser: UpdateUserMutation
  }
})