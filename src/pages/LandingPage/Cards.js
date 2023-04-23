import {
  Flex,
  Circle,
  Box,
  Image,
  Text,
  useColorModeValue,
  Button,
  HStack,
  useDisclosure
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import ChartModal from '../../components/Model';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

const data = {
  isNew: true,
  imageURL: images[1],
  name: 'Academic Block',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}

export function Rating({ rating, numReviews,ratings}) {
  return (
    <HStack>
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Text fontSize='small'>{numReviews}</Text>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
           review{numReviews > 1 && 's'}
        </Box>
      </Flex>

    </HStack>
  );
}

export default function Cards(props) {
  const {image,name,index,rating}=props;
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Flex p={50} w="full" alignItems="center"
        justifyContent="center"
        bg={useColorModeValue('white', 'gray.800')}>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
          <Image
            src={image}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            onClick={() => navigate('/give-rating')}
          />


          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>

            </Flex>
            <Text color={'gray.500'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
              et ea rebum.
            </Text>

            <Flex justifyContent="space-between" alignContent="center" direction={'row'}>
              <Rating rating={data.rating} numReviews={data.numReviews} ratings={rating}/>
              <br />
              <Button
                color={'white.100'}
                onClick={() => { onOpen(); navigate(`/details/${index}`) }}
              >View More</Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <ChartModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
}
