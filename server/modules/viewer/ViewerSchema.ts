import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

import { LoggedInUserContext } from "@/server/graphql/context";
import { UserSchema } from "@/server/modules/user/graphql/UserSchema";

type ViewerSchemaSource = {}

export const ViewerSchema = new GraphQLObjectType<ViewerSchemaSource, LoggedInUserContext>({
  name: 'Viewer',
  fields: () => {
    return {
      user: {
        type: new GraphQLNonNull(UserSchema),
        resolve: (_, __, context) => {
          return context.userId
        }
      }
    }
  }
})