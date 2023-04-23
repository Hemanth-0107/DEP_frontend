

import React from "react";
import Chart from '../../components/Chart';
import {
  Box,
  chakra,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import { StatsCard } from "../LandingPage/Statistics";
import TabularForm from "../../components/Table";

export default function Dashboard({currentUser,showAdminBoard}) {
  console.log(currentUser);
  if(!showAdminBoard){
    window.location.replace('/denyAccess');
    return null;
  }
  return (
    <>
      <Box maxW="7xl" mx={'auto'} pt={2} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={4}
          fontWeight={'bold'}>
          Welcome {currentUser.email.split('@')[0].toUpperCase()}
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Total'} stat={'5000 reviews'} />
          <StatsCard title={'In'} stat={'8 Areas'} />
          <StatsCard title={'Across'} stat={'2 Countries'} />
        </SimpleGrid>
      </Box>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <TabularForm />
      </Box>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <Flex>
          <Box flex="1">
            <Chart />
          </Box>
          {/* <Box flex="1">
            <PieGraph />
          </Box> */}
        </Flex>
      </Box>
    </>
  );
}
