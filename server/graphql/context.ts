import { NextApiRequest } from "next"

import supabase from "../../utils/supabase"

export type Context = {
  isUserLoggedIn: false
} | {
  isUserLoggedIn: true,
  userId: string;
  accessToken: string;
}

export async function generateContext({ req }: { req: NextApiRequest }): Promise<Context> {
  const session = await supabase.auth.session()
  if (session && session.user) {
    console.log(`session user id `, session.user.id)
    return {
      isUserLoggedIn: true,
      userId: session.user.id,
      accessToken: session.access_token,
    }
  }

  const user = await supabase.auth.api.getUserByCookie(req);
  if (user && user.data) {
    console.log(`regular user `, user)
    return {
      isUserLoggedIn: true,
      userId: user.data.id,
      accessToken: user.token ?? '',
    }
  }

  console.log(`no session user id`)
  return {
    isUserLoggedIn: false,
  }
}