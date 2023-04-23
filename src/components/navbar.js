import {
  Box,Flex,Avatar,HStack,Link,IconButton,useColorMode,Button,
  Menu,MenuButton,MenuList,MenuItem,
  MenuDivider,useDisclosure,useColorModeValue,Stack,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import AuthService from "../services/authService";

const Links = ["Dashboard", "About Us", "News"];
const targets = [`/${JSON.parse(localStorage.getItem('user'))?.roles}/dashboard`, "/about", "/news"];

export function Navbar({ currentUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  function logOut() {
    AuthService.logout();
    window.location.href = "/";
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link
                href="/"
                _hover={{
                  textDecoration: "none",
                }}
              >
                CnT PORTAL
              </Link>
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              alignItems="center"
              justifyContent="flex-end"
              margin={{ base: "0", md: "auto" }}
            >
              {Links.map((link, index) => (
                <Link
                  key={link}
                  href={targets[index]}
                  padding="10px"
                  _hover={{
                    textDecoration: "none",
                    bg: "gray.400",
                    rounded: "md",
                  }}
                >
                  {link}
                </Link>
              ))}
            </HStack>

            {currentUser === null ? (
              <Button
                variant={"solid"}
                color={"green.500"}
                size={"sm"}
                mr={4}
                leftIcon={<AddIcon />}
              >
                <Link
                  href="/login"
                  textDecoration="none"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Sign In
                </Link>
              </Button>
            ) : (
              <></>
            )}

            <IconButton
              ml={8}
              icon={isDark ? <FaSun /> : <FaMoon />}
              isRound="true"
              onClick={toggleColorMode}
            />
            {currentUser === null ? (
              <></>
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={currentUser.profilepic} />
                </MenuButton>

                <MenuList>

                <Link 
                    href="/user/dashboard" 
                    textDecoration="none"
                    _hover={{ 
                      textDecoration: "none",
                    }}>
                    <MenuItem href="/user/dashboard">Dashboard</MenuItem>
                  </Link>

                  <Link 
                    href="/editprofile" 
                    textDecoration="none"
                    _hover={{ 
                      textDecoration: "none",
                    }}>
                    <MenuItem href="/editprofile">Edit Profile</MenuItem>
                  </Link>

                  <MenuItem>Settings</MenuItem>

                  <MenuDivider />

                  <MenuItem href="/" onClick={logOut}>
                    Logout
                  </MenuItem>


                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <Link
                  key={link}
                  href={targets[index]}
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{ textDecoration: "none" }}
                >
                  {" "}
                  {link}{" "}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
