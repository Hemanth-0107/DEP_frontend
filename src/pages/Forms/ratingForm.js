import React, { useState } from 'react';
import {
    Icon, 
    Input,
    IconButton,
    Button,
    Heading,
    FormControl,
    FormLabel,
    Text,
    Select,
    FormHelperText,
} from '@chakra-ui/react';
import UserService from '../../services/user-service';
import { useToast } from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';

export default function RatingForm() {
    const [user, setUser] = useState({
        service:"",
        rating: 0,
        description: "",
        file: ""
    });
    const handleFileChange = (e) => {
        const {name,value} = e.target
        console.log(name+value);
        setUser({
            ...user,
            [name]:value,
        })
      };
      const toast = useToast();
     const giveReview = () => {
        if (!user.file) {
          toast({
            title: "Error",
            description: "Please upload a file.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          return;
        }
        UserService.giveReview(user)
          .then(
            (res) => {
              console.log(res.body);
              window.location.href='success';
            },
            (err) => {
              const resMessage =
                (err.response && err.response.data && err.response.data.message) ||
                err.message ||
                err.toString();
              console.log(resMessage);
            }
          );
      };
    const handleRatingClick = (value) => {
        console.log(value + " rating");
        setUser({
            ...user,
            rating:value,
        })
      };
    
      const clearRating = () => {
        setUser({
            ...user,
            rating: 0,
        })
      }
    return (
        <>
            <div style={{ padding: "20px 100px" }}>
                <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                    Give Rating
                </Heading>
                <FormControl>
                    <FormLabel>Service Name</FormLabel>
                    <Select placeholder="Select option" name="service" value={user.selectedvalue} onChange={handleFileChange}>
                        <option value="Academic Block">Academic Block</option>
                        <option value="Electrical Block">Electrical Block</option>
                        <option value="Mechanical Block">Mechanical Block</option>
                        <option value="Annapurna Mess">Annapurna Mess</option>
                    </Select>
                </FormControl>

                <FormControl mt="2%">
                    <FormLabel htmlFor="email" fontWeight={'normal'}>
                        Rating
                    </FormLabel>
                    {[...Array(5)].map((_, index) => {
                        const value = index + 1;
                        return (
                        <IconButton
                            key={value}
                            icon={<Icon as={value <= user.rating ? FaStar : FaRegStar} boxSize={4} />}
                            aria-label={`rating ${value}`}
                            onClick={() => handleRatingClick(value)}
                        />
        );
      })}
                    <Text onClick={clearRating}>Clear</Text>
                    <FormHelperText>We'll never share your Personal data to external sources</FormHelperText>
                </FormControl> 

                 <FormControl>
                    <FormLabel>Upload</FormLabel>
                    <Input
                    type="file"
                    id="file"
                    name="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    />
                </FormControl>

                
                <FormControl>
                    <FormLabel htmlFor="textarea" fontWeight={'normal'} mt="2%">
                        Description
                        <Input
                            id="description" 
                            placeholder="Description"
                            value={user.description}
                            onChange={handleFileChange}
                            name="description"
                        />
                    </FormLabel>
                   
                </FormControl>
                <FormControl>
                        <Button
                        w="7rem"
                        colorScheme="teal"
                        variant="solid"
                       
                        onClick={() => {
                        giveReview();
                        toast({
                            title: 'Review Submitted.',
                            description: "We've given a review.",
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                        });
                        }}>
                        Submit
                        </Button>
                    
                </FormControl>
            </div>
        </>
    );
}