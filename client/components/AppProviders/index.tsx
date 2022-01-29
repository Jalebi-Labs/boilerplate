import { ReactNode } from 'react';

import ReactQueryProvider from './ReactQueryProvider';
import useWatchForAuthStateChanges from './useWatchForAuthStateChange';

type Props = {
  children: ReactNode;
};

export default function AppProviders(props: Props) {
  const { children } = props;

  useWatchForAuthStateChanges();

  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
