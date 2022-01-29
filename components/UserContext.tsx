import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  createContext,
  ReactNode,
} from 'react';

import supabase, { User, AuthChangeEvent, Session } from '../utils/supabase';

type UserContextResolved = {
  state: 'resolved';
  isLoading: false;
  user: {
    auth: User;
    profile: UserProfile;
  } | null;
};

type UserContextLoading = {
  state: 'loading';
  isLoading: true;
};

export type UserContextType = UserContextResolved | UserContextLoading;

const INITIAL_USER_CONTEXT_VALUE: UserContextType = {
  state: 'loading',
  isLoading: true,
};

export const UserContext = createContext<UserContextType | null>(null);

const fetchUserProfile = async (userId: string) => {
  const userProfile = await supabase
    .from<UserProfile>('user_profiles')
    .select()
    .eq('id', userId)
    .single();

  if (userProfile.error) {
    throw new Error(`error when loading user profile: ${userProfile.error}`);
  }

  return userProfile.data;
};

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [userContextValue, setUserContextValue] = useState<UserContextType>(
    () => INITIAL_USER_CONTEXT_VALUE
  );

  const logout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUserContextValue({
        state: 'resolved',
        isLoading: false,
        user: null,
      });
    }
  }, []);

  useEffect(() => {
    const subscription = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        console.log('SUBSCRIBED TO AUTH STATE CHANGE');
        console.log(event, session);
        switch (event) {
          case 'SIGNED_IN': {
            if (!session) {
              throw new Error('did not receive a session');
            }
            if (!session.user) {
              throw new Error('did not receive a session user');
            }

            const userProfile = await fetchUserProfile(session.user.id);

            setUserContextValue({
              state: 'resolved',
              isLoading: false,
              user: {
                auth: session.user,
                profile: userProfile,
              },
            });

            break;
          }
          case 'SIGNED_OUT': {
            setUserContextValue({
              state: 'resolved',
              isLoading: false,
              user: null,
            });

            break;
          }
        }
      }
    );

    return () => {
      console.log('UNSUBSCRIBED FROM AUTH STATE CHANGE');
      subscription.data?.unsubscribe();
    };
  }, []);

  const contextValue = useMemo(() => {
    return {
      logout,
      ...userContextValue,
    };
  }, [userContextValue, logout]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
