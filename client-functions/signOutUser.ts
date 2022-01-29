import supabase from "../utils/supabase";
import { updateUserCookie } from "./updateUserCookie";

type SignOutUserArgs = {
  email: string;
  password: string;
}

export default async function signOutUser(args: SignOutUserArgs) {
  const res = await supabase.auth.signOut()

  if (res.error) {
    throw new Error(res.error.message)
  }

  try {
    await updateUserCookie('SIGNED_OUT', null)
  } catch (error) {
    throw new Error('Failed to update user cookie')
  }
}