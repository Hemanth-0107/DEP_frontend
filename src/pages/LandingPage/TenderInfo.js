import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import Chart from '../../components/Chart'
import { useParams } from "react-router-dom";

export default function Simple() {
  const { id } = useParams();
  const {image,name,index} = JSON.parse(localStorage.getItem(`variable-${id}`));
  console.log(image + name +index)
  const [product] = useState({
    price: "Rs. 2,00,000.00",
    features: [
      "Chronograph",
      "Master Chronometer Certified",
      "Tachymeter",
      "Anti‑magnetic",
      "Chronometer",
      "Small seconds",
    ],
    details: [
      { label: "Between lugs:", value: "20 mm" },
      { label: "Bracelet:", value: "leather strap" },
      { label: "Case:", value: "Steel" },
      { label: "Case diameter:", value: "42 mm" },
      { label: "Dial color:", value: "Black" },
      {
        label: "Crystal:",
        value:
          "Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment inside",
      },
      {
        label: "Water resistance:",
        value: "5 bar (50 metres / 167 feet)",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.",
  });

  return (
    <Container maxW={"7xl"} minH={"8xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
                <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {name}
                </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description}
              </Text>
              <Text fontSize={"lg"}>{product.longDescription}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  {product.features.map((feature) => (
                    <ListItem>{feature}</ListItem>
                  ))}
                </List>
                <List spacing={2}>
                  {product.details.map((detail) => (
                    <ListItem>
                      {detail.label} {detail.value}
                    </ListItem>
                  ))}
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

                          <List spacing={2}>
              {product.details.map((detail) => (
                <ListItem key={detail.label}>
                  <Text as={"span"} fontWeight={"bold"}>
                    {detail.label}
                  </Text>{" "}
                  {detail.value}
                </ListItem>
              ))}
            </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            onClick={() => (window.location.href = "/give-rating?")}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Review
          </Button>
        </Stack>
      </SimpleGrid>
      <Chart />
    </Container>
  );
}
