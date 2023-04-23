import React from "react";
import { StatsCard } from "../LandingPage/Statistics";
import TabularForm from "../../components/Table";
import { Box,Flex,Container,SimpleGrid} from "@chakra-ui/react";
import PieChart from "../../components/PieChart";
import Chart from "../../components/Chart";
function CDashboard({ currentUser, showmoderatorBoard }) {
  console.log(currentUser);
  if (!showmoderatorBoard) {
    window.location.href = "/denyAccess";
    return null;
  }
  return (
    <Container maxW="container.xl">
    <Box p={12}>
      <SimpleGrid
        p={8}
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        <StatsCard title={"Total"} stat={"5000 reviews"} />
        <StatsCard title={"In"} stat={"8 Locations"} />
        <StatsCard title={"Across"} stat={"2 Contracts"} />
      </SimpleGrid>
      <SimpleGrid>
        <TabularForm />
        <SimpleGrid   p={4}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, lg: 8 }}>
          <PieChart />
          <Chart />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  </Container>
  );
}

export default CDashboard;
