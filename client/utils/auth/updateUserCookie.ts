import { AuthChangeEvent, Session } from "@/utils/supabase";

export default async function updateUserCookie(event: AuthChangeEvent, session: Session | null) {
  await fetch('/api/auth/set-session-cookie', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({
      event,
      session
    }),
  });
}