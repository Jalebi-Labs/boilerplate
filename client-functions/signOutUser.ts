import supabase from "@/utils/supabase";

export default async function signOutUser() {
  const res = await supabase.auth.signOut()

  if (res.error) {
    throw new Error(res.error.message)
  }
}