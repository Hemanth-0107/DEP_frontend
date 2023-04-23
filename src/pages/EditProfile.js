import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useToast
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import UserService from '../services/user-service';
export default function EditProfile() {
  const toast =useToast();
  const [user, setUser]= useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    profilePic:''
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if(user.password.length<=confirmPassword.length && user.password!==confirmPassword) {
      toast({
        title: 'Password Mismatch',
        status: 'Warning',
        duration: 2000,
        isClosable: true,
      })
    }
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUser({
        ...user,
        profilePic:reader.result
      });
      toast({
        title: 'Profile picture updated.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if((!user.password && !confirmPassword) || user.password===confirmPassword){
      console.log('Correct password');
      console.log(user.fname+user.email+user.password);

      UserService.UpdateUser(user)
      .then(() =>{
        window.location.href = '/user/dashboard';
      },error =>{   
        const resMessage = (error.response && error.response.data &&
          error.response.data.message) || error.message || error.toString();
          console.log(resMessage);
          console.log(error);
      }) 
    }
    else{
      toast({
        title: 'New password mismatch.',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });

    }
    
  };

  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack
      spacing={4}
      w={'full'}
      maxW={'md'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      boxShadow={'lg'}
      p={6}
      my={12}>
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
        User Profile Edit
      </Heading>
      <FormControl id="userName">
        <FormLabel>User Icon</FormLabel>
        <Stack direction={['column', 'row']} spacing={6}>
          <Center>
            <Avatar size="xl" src={user.profilePic}>
              <AvatarBadge
                as={IconButton}
                size="sm"
                rounded="full"
                top="-10px"
                colorScheme="red"
                aria-label="remove Image"
                icon={<SmallCloseIcon />}
                onClick={() => setUser({...user,profilePic:''})}
              />
            </Avatar>
          </Center>
          <Center w="full">
            <FormControl>
              <Button w="full" as="label" htmlFor="profilePic">
                Change Icon
              </Button>
              <Input
                id="profilePic"
                type="file"
                accept="image/*"
                display="none"
                onChange={handleProfilePicChange}
              />
            </FormControl>
          </Center>
        </Stack>
        </FormControl>

        <FormControl id="fname" isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            name="fname"
            id="fname"
            placeholder="fname"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user.fname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="lname" isRequired>
          <FormLabel>Last name</FormLabel>
          <Input
            name="lname"
            id="lname"
            placeholder="lname"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={user.lname}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            id="email"
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={user.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            id="password"
            placeholder="password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl id="repassword" isRequired>
          <FormLabel>Re Enter Password</FormLabel>
          <Input
            id="repassword"
            name="repassword"
            placeholder="re-enter password"
            _placeholder={{ color: 'gray.500' }}
            type="password"
            value = {confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'green.400'}
            color={'white'}
            w="full"
            onClick={handleSubmit}
            _hover={{
              bg: 'green.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
