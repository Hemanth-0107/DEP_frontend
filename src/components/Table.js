import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Badge,
  Th,
  Td,
  TableCaption,
  useColorMode
} from "@chakra-ui/react"

const TabularForm = () => {
  const { colorMode } = useColorMode();  
  return (
    <Table variant="simple" colorScheme={colorMode === "light" ? "blue" : "gray"} border={"1px"}>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead border={"1px"}>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody border={"1px"}>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
          <Td><Badge bg={"green.500"}>Online</Badge></Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
      <Tfoot border="1px">
        <Tr>
          <Th>Total</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
          <Th isNumeric>Serving</Th>
        </Tr>
      </Tfoot>
    </Table>
  )
}

export default TabularForm;
