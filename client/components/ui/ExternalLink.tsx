import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

type Props = Omit<ChakraLinkProps, 'isExternal'>;

export default function ExternalLink(props: Props) {
  return <ChakraLink isExternal {...props} />;
}
