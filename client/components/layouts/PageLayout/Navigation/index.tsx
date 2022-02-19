import { HStack, Text, Button } from '@chakra-ui/react';
import { useCurrentUserQuery } from '@/client/queries/currentUser';
import InternalLink from '@/client/components/ui/InternalLink';
import { baseRoute, loginRoute, signupRoute } from '@/client/utils/routes';
import UserNavItem from './UserNavItem';

const NoUserActions = () => {
  return (
    <>
      <Button
        as={InternalLink}
        href={loginRoute()}
        variant="ghost"
        _hover={{
          textDecor: 'none',
        }}
      >
        Log in
      </Button>
      <Button
        as={InternalLink}
        href={signupRoute()}
        _hover={{
          textDecor: 'none',
        }}
      >
        Sign up
      </Button>
    </>
  );
};

export default function Navigation() {
  const { data, isSuccess, status } = useCurrentUserQuery();

  return (
    <HStack
      as="header"
      alignItems="baseline"
      justifyContent="space-between"
      p={4}
    >
      <InternalLink
        href={baseRoute()}
        _hover={{
          textDecor: 'none',
        }}
      >
        <Text as="span" fontWeight="semibold" fontSize="xl">
          Boilerplate
        </Text>
      </InternalLink>

      <HStack spacing={4}>
        {isSuccess && data?.viewer ? (
          <UserNavItem userName={data.viewer.user.name} />
        ) : (
          <NoUserActions />
        )}
      </HStack>
    </HStack>
  );
}
