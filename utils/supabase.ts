import { createClient, User, AuthChangeEvent, Session } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '',
)

export default supabase;

export type { User, AuthChangeEvent, Session }