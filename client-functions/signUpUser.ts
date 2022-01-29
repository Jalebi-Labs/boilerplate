import supabase from "../utils/supabase";
import updateUserCookie from "./updateUserCookie";

type SignUpUserArgs = {
  email: string;
  password: string;
}

export default async function signUpUser(args: SignUpUserArgs) {
  const res = await supabase.auth.signUp({
    email: args.email,
    password: args.password,
  })

  if (res.error) {
    throw new Error(res.error.message)
  }
}