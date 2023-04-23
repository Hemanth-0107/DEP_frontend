import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AuthService from "../../services/authService";
// import { Navigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    console.log(user.email, user.password);
    AuthService.login(user).then(
      () => {
        console.log("logged in")
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
        console.log(error);
      }
    );
  };
  // const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <Flex minH={"40vh"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={12}>
        <Stack align={"center"}>
          {isChecked ? (
            <Heading>Admin Sign In</Heading>
          ) : (
            <Heading>Student Sign In</Heading>
          )}
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={user.email}
                required
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
                Password
              </FormLabel>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={user.password}
                  required
                  name="password" // add name attribute to input
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={15}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox value={isChecked} onChange={handleCheckboxChange}>
                  As Admin
                </Checkbox>

                <Link color={"blue.400"} href="/login/forgotpassword">
                  Forgot password?
                </Link>
              </Stack>
              <Button
                bg={"green.400"}
                onClick={login}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Sign in
              </Button>
              <Link href={"/register"} textAlign="center">
                Register here
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
