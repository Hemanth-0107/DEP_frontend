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
  } from '@chakra-ui/react';
import React, {useState} from "react";
import axios from "axios";
import jwt from 'jsonwebtoken';
  export default function Login({setLoginUser,setLogin}) {
    const [user, setUser] = useState({
        email:"",
        password:""
        })
        
      const handleChange = (e) =>{
        const {name,value} = e.target
        console.log(e.target);
        setUser({
            ...user,
            [name]:value,
        })
    }

     const login = () =>{
        const {email,password} = user;
        jwt.sign(user,'my_secret_key');
        if(email && password){
            axios.post("http://localhost:9002/login",user).then(res =>{
                console.log(res)
                setLoginUser(res.data.user)
                setLogin(true)
            })
            alert("posted");
        }
        else{
            alert("invalid input");
        }            
    }
    const [isChecked, setIsChecked] = useState(false);

      function handleCheckboxChange() {
        setIsChecked(!isChecked);
      }
      
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            {
              isChecked?
              <Heading>Admin Sign In</Heading>:
              <Heading>Student Sign In</Heading>
            }
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={user.email} 
                onChange={handleChange} required/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={user.password} 
                required onChange={handleChange}/>
              </FormControl>
              <Stack spacing={15}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox 
                  value={isChecked} onChange={handleCheckboxChange}>As Admin</Checkbox>
                  
                  <Link color={'blue.400'} href='/'>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'green.400'}
                  onClick={login}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Sign in
                </Button>
                <Link href={'/register'}>Register here</Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
