import supabase from '../../../../utils/supabase';

type SignUpUserArgs = {
  email: string,
  password: string,
}

export default async function signUpUser(args: SignUpUserArgs): Promise<void> {
  const signUpResponse = await supabase.auth.signUp({
    email: args.email,
    password: args.password,
  })

  if (signUpResponse.error) {
    throw new Error(signUpResponse.error.message)
  }
  if (!signUpResponse.session) {
    throw new Error('Missing session after sign up')
  }
  if (!signUpResponse.session.refresh_token) {
    throw new Error('Missing session refresh token')
  }

  const setSessionResponse = await supabase.auth.setSession(signUpResponse.session.refresh_token)

  if (setSessionResponse.error) {
    throw new Error(setSessionResponse.error.message)
  }
}