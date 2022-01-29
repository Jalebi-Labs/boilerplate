import { GraphQLFieldConfig, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInputObjectType, GraphQLFieldConfigArgumentMap } from "graphql";

import { Context } from '../../../graphql/context';
import signInUser from '../interactions/signInUser';

type SignInUserInputType = {
  input: {
    email: string;
    password: string;
  }
}

const SignInUserInput = new GraphQLInputObjectType({
  name: 'SignInUserInput',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }
})

const SignInUserPayload = new GraphQLObjectType<unknown, unknown>({
  name: 'SignInUserPayload',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: (_, __, context) => {
        console.log('here in SignInUserPayload')
        return null;
      }
    }
  }
})


export const SignInUserMutation: GraphQLFieldConfig<unknown, Context, SignInUserInputType> = {
  type: SignInUserPayload,
  args: {
    input: {
      type: SignInUserInput
    }
  },
  resolve: async (_, args) => {
    await signInUser({
      email: args.input.email,
      password: args.input.password,
    })
  }
}