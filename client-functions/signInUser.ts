import supabase from "@/utils/supabase";

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
}