import { Box, Text } from '@chakra-ui/react';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <Box d="flex" alignItems="center" as="main">
      <Text fontSize="xl" fontWeight="semibold">
        {title}
      </Text>
    </Box>
  );
}
