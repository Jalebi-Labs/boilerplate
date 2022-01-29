import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { baseRoute } from '@/client/utils/routes';
import signOutUser from '@/client/utils/auth/signOutUser';

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