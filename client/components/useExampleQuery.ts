import { client, gql } from "@/client/utils/graphqlClient";
import { useExampleQueryQuery } from "@/schemas/frontend-graphql";

gql`
  query exampleQuery {
    viewer {
      user {
        name
      }
    }
  }
`

export default function useExampleQuery(_variables?: Parameters<typeof useExampleQueryQuery>[1]) {
  return useExampleQueryQuery(client, {}, {
    refetchOnWindowFocus: false
  })
}

useExampleQuery.getKey = useExampleQueryQuery.getKey