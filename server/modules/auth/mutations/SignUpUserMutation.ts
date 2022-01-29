import { GraphQLFieldConfig, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInputObjectType, GraphQLFieldConfigArgumentMap } from "graphql";
import { Context } from '../../../graphql/context';

type SignUpUserInputType = {
  input: {
    email: string;
    password: string;
  }
}

const SignUpUserInput = new GraphQLInputObjectType({
  name: 'SignUpUserInput',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }
})

const SignUpUserPayload = new GraphQLObjectType({
  name: 'SignUpUserPayload',
  fields: {
    hello: {
      type: GraphQLString,
    }
  }
})


export const SignUpUserMutation: GraphQLFieldConfig<unknown, Context, SignUpUserInputType> = {
  type: SignUpUserPayload,
  args: {
    input: {
      type: SignUpUserInput
    }
  },
  resolve: async (_, args, context) => {

  }
}