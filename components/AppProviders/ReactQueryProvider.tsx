import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClient } from '@/utils/queryClient';

type Props = {
  children: ReactNode;
};

export default function ReactQueryProvider(props: Props) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
