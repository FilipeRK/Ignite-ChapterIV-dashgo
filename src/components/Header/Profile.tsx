import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Filipe Kohls</Text>
          <Text color={'gray.300'} fontSize={'small'}>
            filiperenank@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Filipe Kohls"
        src="https://github.com/FilipeRK.png"
      />
    </Flex>
  );
}