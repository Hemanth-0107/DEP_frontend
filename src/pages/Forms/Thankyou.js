import { Box, Heading, Text, Button, Link, useColorMode } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function Success() {
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'light' ? 'gray.500' : 'gray.200';

  return (
    <Box textAlign="center" py={12} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Success
      </Heading>
      <Text color={textColor}>
        Thank you for your valuable feedback. Your response will be beginning for 
        a new change.
      </Text>
      <Button
        colorScheme="teal"
        bg="green.500"
        color="white"
        variant="solid"
        _hover={{ bg: 'green.400' }}
        >
          <Link href="/" _hover={{textDecoration:"none"}}>Go to Home</Link>     
      </Button>
    </Box>
  );
}
