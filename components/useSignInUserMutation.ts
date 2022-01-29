import { client, gql } from "../utils/graphqlClient";
import { useSignInUserMutationMutation } from "../schemas/frontend-graphql";
import supabase from "../utils/supabase";

import { updateSupabaseCookie } from './useWatchForAuthStateChange'

gql`
  mutation SignInUserMutation($input: SignInUserInput!) {
    signInUser(input: $input) {
      hello
    }
  }
`

export default function useSignInMutation() {
  return useSignInUserMutationMutation(client, {
    onSuccess: async (data, variables, context) => {
      const session = supabase.auth.session();
      await updateSupabaseCookie('SIGNED_IN', session)
    }
  })
}

useSignInMutation.getKey = useSignInUserMutationMutation.getKey