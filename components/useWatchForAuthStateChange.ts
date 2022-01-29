import { useEffect } from "react";
import updateUserCookie from "@/client-functions/updateUserCookie";
import supabase from "@/utils/supabase";

export default function useWatchForAuthStateChange() {
  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case 'SIGNED_IN':
        case 'SIGNED_OUT':
          updateUserCookie(event, session);
      }
    });

    return () => {
      subscription.data?.unsubscribe();
    };
  });
}