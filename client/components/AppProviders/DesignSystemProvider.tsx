import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export default function DesignSystemProvider({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
