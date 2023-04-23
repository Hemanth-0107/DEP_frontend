
import React, { useState } from 'react';
import {
  Progress,Box,ButtonGroup,Button,Heading,
  Flex,FormControl,GridItem,FormLabel,Input,Select,
  SimpleGrid,InputLeftAddon,InputGroup,
  Textarea,FormHelperText,InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import OTP from './Otp';
import AuthService from "../../services/authService";
import {Navigate} from 'react-router-dom';
export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [user,setUser]=useState({
    email:"",
    fname:"",
    lname:"",
    password:"",
    country:"",
    state:"",
    street:"",
    city:"",
    website:"",
    about:""
  }  );

  const handleChange = (e) =>{
    const {name,value} = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
}


  const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          User Registration
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="firstname" fontWeight={'normal'}>
              First name
            </FormLabel>
            <Input 
              id="firstname"
             placeholder="First name"
             value={user.fname}
             onChange={handleChange}
              />
          </FormControl>
  
          <FormControl>
            <FormLabel htmlFor="lastname" fontWeight={'normal'}>
              Last name
            </FormLabel>
            <Input 
            id="lastname" 
            placeholder="Last name"
             value={user.lname}
             onChange={handleChange}
             />
          </FormControl>
        </Flex>
  
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={'normal'}>
            Email address
          </FormLabel>
          <Input id="email" 
          type="email" 
          required
          value={user.email}
          onChange={handleChange}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
  
        <FormControl>
          <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
            Password
          </FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              required
              value={user.password}
             onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </>
    );
  };
  
  const Form2 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          User Details
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Country / Region
          </FormLabel>
          <Select
            id="country"  name="country"
            autoComplete="country"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            value = {user.country}
            onChange={handleChange}
            w="full"
            rounded="md">
            <option value="US">United States</option>
            <option value="can">Canada</option>
            <option value="ind">India</option>
            <option value="others">Others</option>
          </Select>
        </FormControl>
  
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="street_address"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            Street address
          </FormLabel>
          <Input
            type="text"
            name="street_address"
            id="street_address"
            value={user.street}
            onChange={handleChange}
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            City
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            value={user.city}
            onChange={handleChange}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="state"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            State / Province
          </FormLabel>
          <Input
            type="text"
            name="state"
            id="state"
            autoComplete="state"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            value={user.state}
            onChange={handleChange}
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            Pincode
          </FormLabel>
          <Input
            type="text"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            value={user.pincode}
            onChange={handleChange}
          />
        </FormControl>
      </>
    );
  };
  
  const Form3 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
          Social Handles (Optional)
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Website
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: 'gray.800',
                }}
                color="gray.500"
                rounded="md">
                http://
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="www.example.com"
                focusBorderColor="brand.400"
                rounded="md"
                value={user.website}
                onChange={handleChange}
              />
            </InputGroup>
          </FormControl>
  
          <FormControl id="email" mt={1}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              About
            </FormLabel>
            <Textarea
              placeholder="I have experience in..."
              rows={3}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: 'sm',
              }}
              value={user.about}
              onChange={handleChange}
            />
            <FormHelperText>
              Brief description for your profile. URLs are hyperlinked.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
      </>
    );
  };
  const register = () =>{
    console.log(user.email,user.fname,user.lname);
    AuthService.register(user)
    .then(res =>{
      console.log(res.body);
      Navigate('/login');
    }, err =>{
      const resMessage = 
      (err.response && err.response.data && err.response.data.message)
      || err.message||err.toString();
      console.log(resMessage);
    })
  }
  
  
  return (
    <>
      <Box
        borderWidth="1px" rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
         p={8}
        m="10px auto" as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated/>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : step===3? <Form3 />:<OTP/>}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="outline"
                w="7rem"
                mr="5%">
                Back
              </Button>

              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="solid">
                Next
              </Button>

            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                color="green.500"
                variant="solid"
                onClick={() => {
                  register();
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
