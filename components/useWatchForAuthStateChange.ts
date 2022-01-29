import { useEffect } from "react";

import supabase, { AuthChangeEvent, Session } from "../utils/supabase";



export default function useWatchForAuthStateChange() {
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            console.log('updating', event, session)
            updateSupabaseCookie(event, session);
        });

        return () => {
            authListener?.unsubscribe();
        };
    });
}