import { GraphQLObjectType } from 'graphql'

import { Context } from './context';
import { SignUpUserMutation } from '../modules/auth/mutations/SignUpUserMutation'
import { SignInUserMutation } from '../modules/auth/mutations/SignInUserMutation'

export const rootMutation = new GraphQLObjectType<unknown, Context>({
  name: 'Mutation',
  fields: {
    signUpUser: SignUpUserMutation,
    signInUser: SignInUserMutation,
  }
})