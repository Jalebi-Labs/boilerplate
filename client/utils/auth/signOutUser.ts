import { invalidateCurrentUserQuery } from "@/client/queries/currentUser";
import supabase from "@/utils/supabase";
import updateUserCookie from "./updateUserCookie";

export default async function signOutUser() {
  const res = await supabase.auth.signOut()

  if (res.error) {
    throw new Error(res.error.message)
  }

  await updateUserCookie('SIGNED_OUT', null)

  invalidateCurrentUserQuery()
}