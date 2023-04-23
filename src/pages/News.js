import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Text,
  IconButton,
  CardFooter,
  Heading,
  CardBody,
  Image,
  Button,
  Input,
  Spinner,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";
import { BiShare, BiLike, BiChat } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserService from "../services/user-service";
import NewsCard from "../components/Newscard";

function Newscard({ currentUser }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(true);
  const [shared, setShared] = useState(false);

  const handleLike = () => {
    console.log(liked);
    setLiked(!liked);
    console.log(liked);
  };

  const handleComment = () => {
    setCommented(!commented);
    console.log(commented);
  };

  const handleShare = () => {
    setShared(!shared);
  };

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await UserService.getNews();
        setNews(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        // window.location.href='/*'
      }
    }

    fetchNews();
  }, []);
  if (isLoading) return <Spinner size="xl" />;
  if (!Array.isArray(news)) {
    return <NewsCard />;
  }

  return (
    <Center>
      <Box alignItems={"center"} justifyContent={"center"}>
        <NewsCard />
        {news.map((item, index) => (
          <Card key={index} maxW="2xl" p="0">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={currentUser.fname} src={"#"} />

                  <Box>
                    <Heading size="sm">{item.author}</Heading>
                    <Text>{item.role}</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{item.content}</Text>
            </CardBody>
            <Image objectFit="cover" src={item.imageUrl} alt={item.title} />

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Button
                flex="1"
                onClick={handleLike}
                variant="ghost"
                color={liked ? "blue.500" : "gray.500"}
                _hover={{ color: liked ? "blue.600" : undefined }}
                leftIcon={<BiLike fill="currentColor" />}
              >
                {liked ? "Liked" : "Like"}
              </Button>
              <Button
                flex="1"
                onClick={handleComment}
                variant="ghost"
                _hover={{ color: commented ? "blue.600" : "gray.600" }}
                leftIcon={<BiChat fill="currentColor" />}
              >
                Comment
              </Button>
              <Button
                flex="1"
                variant="ghost"
                onClick={handleShare}
                _hover={{ color: shared ? "blue.600" : "gray.600" }}
                leftIcon={<BiShare fill="currentColor" />}
              >
                Share
              </Button>
            </CardFooter>
            {!commented && (
              <InputGroup size="md">
                <Input pr="4.5rem" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm">
                    Submit
                  </Button>
                </InputRightElement>
              </InputGroup>
            )}
          </Card>
        ))}
      </Box>
    </Center>
  );
}

export default Newscard;
