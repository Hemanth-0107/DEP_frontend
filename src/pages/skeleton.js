import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Skeleton } from '@chakra-ui/react';

const SimpleSkull = ({...rest}) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box padding="6" boxShadow="lg" bg={bgColor}>
      <Skeleton height="20px" mb="4" />
      <Skeleton height="150px" />
      <Box display="flex" mt="4">
        <Skeleton height="20px" width="170px" mr="4" />
        <Skeleton height="20px" width="170px" />
      </Box>
    </Box>
  );
};

export default SimpleSkull;
