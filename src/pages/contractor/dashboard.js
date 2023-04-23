import React from 'react'
import {SimpleGrid} from '@chakra-ui/react';
import { StatsCard } from "../LandingPage/Statistics";
import TabularForm from "../../components/Table";
function CDashboard({currentUser,showmoderatorBoard}) {
  console.log(currentUser)
  if(!showmoderatorBoard){
    window.location.href='/denyAccess';
    return null;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
    <StatsCard title={'Total'} stat={'5000 reviews'} />
    <StatsCard title={'In'} stat={'8 Locations'} />
    <StatsCard title={'Across'} stat={'2 Contracts'} />
    <TabularForm />
  </SimpleGrid>
  )
}

export default CDashboard