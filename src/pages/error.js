import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
export default function NotFound() {
  return (
    <Box textAlign="center" py="140" px={12}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bg="green.500"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
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