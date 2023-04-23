import React,{useState} from 'react'
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
    Input,
    Button,
    InputGroup,
    InputRightElement
    
} from '@chakra-ui/react';
import {BiShare, BiLike,BiChat} from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

const data = {
  title: 'New Chakra UI Release',
  author: 'Segun Adebayo',
  authorDescription: 'Creator, Chakra UI',
  authorImage: 'https://bit.ly/sage-adebayo',
  content: 'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.',
  imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
}
function NewsCard() {
  const [liked, setLiked] = useState(false);
  const [commented, setCommented] = useState(false);
  const [shared, setShared] = useState(false);
  const handleLike = () => {
    console.log(liked);
    setLiked(!liked);
    console.log(liked)
  };

  const handleComment = () => {
    setCommented(!commented);
    console.log(commented)
  };

  const handleShare = () => {
    setShared(!shared);
  };
  return (
   
      <Card maxW='xl'  >
    <CardHeader>
      <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          <Avatar name={data.author} src={data.authorImage} />

          <Box>
            <Heading size='sm'>{data.author}</Heading>
            <Text>{data.authorDescription}</Text>
          </Box>
        </Flex>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={<BsThreeDotsVertical />}
        />
      </Flex>
    </CardHeader>
    <CardBody>
      <Text>
        {data.content}
      </Text>
    </CardBody>
    <Image
      objectFit='cover'
      src={data.imageUrl}
      alt={data.title}
    />

    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '136px',
        },
      }}
    >
      <Button flex='1'
              onClick={handleLike}
              variant='ghost'
              color={liked ? 'blue.500' : 'gray.500'}
              _hover={{ color: liked ? 'blue.600' : undefined }}
              leftIcon={<BiLike fill='currentColor' />}
            >
              {liked ? 'Liked' : 'Like'}
            </Button>
            <Button flex='1' 
            onClick={handleComment}
            variant='ghost' 
            _hover={{ color: commented ? 'blue.600' : 'gray.600' }}
            leftIcon={<BiChat fill='currentColor'/>}>
              Comment
            </Button>
            <Button flex='1' variant='ghost' 
            onClick={handleShare}
            _hover={{ color: shared ? 'blue.600' : 'gray.600' }}
            leftIcon={<BiShare fill='currentColor'/>}>
              Share
            </Button>
          </CardFooter>
          { 
             !commented && <InputGroup size="md">
                <Input pr="4.5rem" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setCommented(false)}>
                    Submit
                  </Button>
                </InputRightElement>
              </InputGroup>
          }          

  </Card>
  )
}

export default NewsCard
