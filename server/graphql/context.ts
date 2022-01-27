import { NextApiRequest } from "next"

import supabase from "../../utils/supabase"

export type Context = {
  in: string,
}

export async function generateContext({ req }: { req: NextApiRequest }): Promise<Context> {
  const session = await supabase.auth.session()
  const userByCookie = await supabase.auth.api.getUserByCookie(req)
  console.log(JSON.stringify({ headers: req.headers, session: session ?? 'undefined', userByCookie: userByCookie ?? 'undefined' }, null, 2))

  return {
    in: 'context'
  }
}