import { gql, GraphQLClient } from "graphql-request";

import supabase from "./supabase";

const client = new GraphQLClient('/api/graphql', {
  headers: {
  }
})

export {
  client,
  gql,
}