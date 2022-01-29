import { ReactNode } from 'react';

import ReactQueryProvider from './ReactQueryProvider';

type Props = {
  children: ReactNode;
};

export default function AppProviders(props: Props) {
  const { children } = props;

  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
