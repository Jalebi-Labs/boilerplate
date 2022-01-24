import { useEffect } from 'react';
import { useRouter } from 'next/router';
import supabase from "../utils/supabase";

export default function useLogout() {
  const router = useRouter();

  useEffect(() => {
    const signOut = async () => {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Failed to sign out', error)
        return;
      }

      router.replace('/')
    }

    signOut()
  }, [router])
}