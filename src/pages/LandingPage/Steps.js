
  import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    FcCamera,
    FcCamcorder,
    FcFeedback,
    FcFile,
    FcCheckmark,
  } from 'react-icons/fc';
  
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function Steps() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            User Guide
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Keep the following points in mind while providing the feedback.
          </Text>
        </Stack>
  
        <Container maxW={'5xl'} mt={12} width={'100%'}>
          <Flex flexWrap="wrap" gridGap={10} justify="center">
            <Card
              heading={'Record'}
              icon={<Icon as={FcCamcorder} w={6} h={6} />}
              description={
                'If you dont have access to the internet while giving the review. So, geo-locational info available in the app can records the data and accepts the review within 6 hrs /12 hrs of the capture.'
              }
              href={'#'}
            />
            <Card
              heading={'Camera'}
              icon={<Icon as={FcCamera} w={6} h={6} />}
              description={'You may be asked to provide access to device camera.'}
              href={'#'}
            />
            <Card
              heading={'Feedback'}
              icon={<Icon as={FcFeedback} w={6} h={6} />}
              description={
                'You can provide the feedback either by clicking on the utility cards section or by selecting required image in current facility section.'
              }
              href={'#'}
            />
            <Card
              heading={'Form'}
              icon={<Icon as={FcFile} w={6} h={6} />}
              description={
                'After clicking on the images, a feedback form will open. Fill all the required sections before submitting.'
              }
              href={'#'}
            />
            <Card
              heading={'Verification and updation'}
              icon={<Icon as={FcCheckmark} w={6} h={6} />}
              description={
                'All the forms will be authenticated using a pretrained Machine Learning model. After the verification, the rating of the particular facilities will be updated depending on relevance of your feedabck.'
              }
                href={'#'}
                            />
                          </Flex>
                        </Container>
                      </Box>
                    );
                  }
  