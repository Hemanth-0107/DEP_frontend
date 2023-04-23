import {
  Avatar,
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const Guide = {
  name: 'Dr. Ravi Teja',
    role: 'Project guide',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar:
   'http://drive.google.com/uc?export=view&id=1lk4o49cWmNmS66TnfEb8KmpBri1V7XMe'
}

const testimonials = [
  {
    name: 'Adarsh Shandilya',
    role: '2020EEB1145',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar:
      // 'https://drive.google.com/file/d/1P5eOUfLeClh_JlZt_6QfsOrQDKNj1Lkr/view'
      'http://drive.google.com/uc?export=view&id=1P5eOUfLeClh_JlZt_6QfsOrQDKNj1Lkr'
  },
  {
    name: 'Ponugupati Hemanth',
    role: '2020EEB1191',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      'http://drive.google.com/uc?export=view&id=11iixBdnAHMwTcuJHqeXzu5cuxXGh_hD6',

  },
  {
    name: 'Shyam Patil',
    role: '2020EEB1208',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'http://drive.google.com/uc?export=view&id=1ysPgJbOw6npQV9-zmvnltbArowwZRKIh'      
  },
  {
    name: 'B. Sai Sharath',
    role: '2020EEB1363',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:
      'http://drive.google.com/uc?export=view&id=1UxCgfrPlBGhbx6POkeXyAphgkwEUCN3g'
  },
  {
    name: 'Tarun Kumar Das',
    role: '2020EEB1212',
    content:
      'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
    avatar:'#'
  },
];


function TestimonialCard(props) {
  const { name, role, content, avatar} = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.700')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
      }}>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={40}
          textTransform={'uppercase'}
          color={'purple.400'}>
          CnT Portal
        </chakra.h3>

        <chakra.h1
          py={5}
          fontSize={24}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          Under guidance of 
        </chakra.h1>

        <Box width="full" mt={16} mb={16} mx="auto">
          <TestimonialCard {...Guide} />
        </Box>

        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          For a {' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            TRANSPARENT AND CORRUPTION FREE
          </chakra.strong>{' '}
          tendering management of public resources.
        </chakra.h2>

      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mb={16}
        mx={'auto'}
        alignItems={'center'}
        >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box>
        
      </Box>
    </Flex>
  );
}