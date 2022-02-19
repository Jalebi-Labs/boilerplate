import { invalidateCurrentUserQuery } from "@/client/queries/currentUser";
import supabase from "@/utils/supabase";
import updateUserCookie from "./updateUserCookie";

type SignInUserArgs = {
  email: string;
  password: string;
}

export default async function signInUser(args: SignInUserArgs) {
  const res = await supabase.auth.signIn({
    email: args.email,
    password: args.password,
  })

  if (res.error) {
    throw new Error(res.error.message)
  }

  await updateUserCookie('SIGNED_IN', res.session)

  invalidateCurrentUserQuery()
}