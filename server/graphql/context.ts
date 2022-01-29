import { NextApiRequest } from "next"

import supabase from "@/utils/supabase"

type LoggedInUserContext = {
  isUserLoggedIn: true,
  userId: string;
}

type LoggedOutUserContext = {
  isUserLoggedIn: false,
}

export type Context = LoggedInUserContext | LoggedOutUserContext

export async function generateContext({ req }: { req: NextApiRequest }): Promise<Context> {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      isUserLoggedIn: false,
    }
  }

  return {
    isUserLoggedIn: true,
    userId: user.id,
  }
}