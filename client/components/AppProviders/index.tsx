import { ReactNode } from 'react';

import ReactQueryProvider from './ReactQueryProvider';
import DesignSystemProvider from './DesignSystemProvider';

type Props = {
  children: ReactNode;
};

export default function AppProviders(props: Props) {
  const { children } = props;

  return (
    <ReactQueryProvider>
      <DesignSystemProvider>{children}</DesignSystemProvider>
    </ReactQueryProvider>
  );
}
