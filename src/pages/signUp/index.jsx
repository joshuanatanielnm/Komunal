import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import Navbar from '../../components/navbar/index';

export default function SignUp() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Navbar />
      <Container maxW="3xl" as={Stack}>
        <Heading>Sign Up</Heading>
        <Text maxW="xl" mb={5}>
          Log in to get access to create new events, and have your events viewed
          worldwide
        </Text>
        <VStack spacing={4}>
          <Input placeholder="Nama" size="lg" />
          <Input placeholder="Phone Number" size="lg" />
          <Input placeholder="Email" size="lg" />
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
        <Button w="100%" colorScheme="yellow" size="lg">
          Sign Up
        </Button>
      </Container>
    </div>
  );
}
