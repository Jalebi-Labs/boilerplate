import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export default function FullPageLayout(props: Props) {
  return <Flex minHeight="100vh" justifyContent="center" pt={8} {...props} />;
}
