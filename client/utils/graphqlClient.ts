import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient('/api/graphql', {
  headers: {
  }
})

export {
  client,
  gql,
}