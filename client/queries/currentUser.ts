import { useCurrentUserQueryQuery } from '@/schemas/frontend-graphql';
import { client, gql } from "@/client/utils/graphqlClient";
import { queryClient } from "@/client/utils/queryClient";

gql`
  query currentUserQuery {
    viewer {
      user {
        name
      }
    }
  }
`

export function useCurrentUserQuery(_variables?: Parameters<typeof useCurrentUserQueryQuery>[1]) {
  return useCurrentUserQueryQuery(client)
}

useCurrentUserQuery.getKey = useCurrentUserQueryQuery.getKey

export function invalidateCurrentUserQuery() {
  queryClient.invalidateQueries(useCurrentUserQuery.getKey())
}