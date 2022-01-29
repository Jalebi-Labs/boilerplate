import { GraphQLFieldConfig, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInputObjectType, GraphQLFieldConfigArgumentMap } from "graphql";

import { Context } from '../../../graphql/context';
import updateUser, { UpdateUserArgs } from '../interactions/updateUser';

type UpdateUserInputType = {
  name?: string | null;
}

const UpdateUserInput = new GraphQLInputObjectType({
  name: 'UpdateUserInput',
  fields: {
    name: {
      type: GraphQLString,
    },
  }
})

const UpdateUserPayload = new GraphQLObjectType<unknown, unknown>({
  name: 'UpdateUserPayload',
  fields: {
    hello: {
      type: GraphQLString,
      resolve: (_, __, context) => {
        console.log('here in UpdateUserPayload')
        return null;
      }
    }
  }
})


export const UpdateUserMutation: GraphQLFieldConfig<unknown, Context, UpdateUserInputType> = {
  type: UpdateUserPayload,
  args: {
    input: {
      type: UpdateUserInput
    }
  },
  resolve: async (_, args, context) => {
    if (!context.isUserLoggedIn) {
      throw new Error('User must be logged in')
    }

    const argsToUpdate: UpdateUserArgs = {}
    if (args.name) {
      argsToUpdate.name = args.name
    }

    await updateUser(context.userId, argsToUpdate)
  }
}