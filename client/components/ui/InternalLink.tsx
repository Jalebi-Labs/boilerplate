import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type Props = Omit<ChakraLinkProps, 'href' | 'isExternal'> &
  Omit<NextLinkProps, 'as' | 'passHref'>;

export default function InternalLink(props: Props) {
  const { href, replace, scroll, shallow, prefetch, locale, ...rest } = props;

  return (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      passHref
    >
      <ChakraLink {...rest} />
    </NextLink>
  );
}
