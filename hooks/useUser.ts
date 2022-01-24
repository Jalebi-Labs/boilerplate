import { useContext } from "react";

import { UserContext, UserContextType } from '../components/UserContext';

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('`useUser` must be used within a `UserContextProvider`')
  }

  return context;
}

export type CurrentUser = NonNullable<Extract<UserContextType, { state: 'resolved' }>['user']>

export const useCurrentUser = (): CurrentUser => {
  const context = useUser();

  if (context.isLoading) {
    throw new Error('`useCurrentUser` was called while loading')
  }

  if (!context.user) {
    throw new Error('`useCurrentUser` called without a current user')
  }

  return context.user;
}