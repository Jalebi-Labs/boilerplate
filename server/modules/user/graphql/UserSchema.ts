import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { LoggedInUserContext } from "@/server/graphql/context";
import findUserById from "@/server/modules/user/interactions/findUserById";

type UserSchemaSource = string;

export const UserSchema = new GraphQLObjectType<UserSchemaSource, LoggedInUserContext>({
  name: 'User',
  fields: () => {
    return {
      name: {
        type: new GraphQLNonNull(GraphQLString),
        resolve: async (userId, _, __) => {
          const user = await findUserById(userId)
          return user.name ?? '(Unnamed)'
        }
      }
    }
  }
})