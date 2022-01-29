import supabase from '../../../../utils/supabase';

type SignInUserArgs = {
  email: string,
  password: string,
}

export default async function signInUser(args: SignInUserArgs): Promise<void> {
  const signInResponse = await supabase.auth.signIn({
    email: args.email,
    password: args.password,
  })

  if (signInResponse.error) {
    throw new Error(signInResponse.error.message)
  }
  if (!signInResponse.session) {
    throw new Error('Missing session after sign up')
  }
  if (!signInResponse.session.refresh_token) {
    throw new Error('Missing session refresh token')
  }

  const setSessionResponse = await supabase.auth.setSession(signInResponse.session.refresh_token)

  if (setSessionResponse.error) {
    throw new Error(setSessionResponse.error.message)
  }
}