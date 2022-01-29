import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { baseRoute } from '../utils/routes';
import signOutUser from '../client-functions/signOutUser';

export default function useLogout() {
  const router = useRouter();

  useEffect(() => {
    const signOut = async () => {
      await signOutUser()
      router.replace(baseRoute())
    }

    signOut()
  }, [router])
}