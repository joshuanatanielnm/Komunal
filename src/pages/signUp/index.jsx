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
import React, { useCallback, useState } from 'react';
import { projectAuth, projectFirestore } from '../../firebase/config';

import Navbar from '../../components/navbar/index';

export default function SignUp({ history }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password, userName, phoneNumber } = event.target.elements;
      try {
        await projectAuth.createUserWithEmailAndPassword(
          email.value,
          password.value
        );
        projectFirestore.collection('users').add({
          email: email.value,
          userName: userName.value,
          phoneNumber: phoneNumber.value,
        });

        history.push('/create-event');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Navbar />
      <Container maxW="3xl" as={Stack}>
        <Heading>Sign Up</Heading>
        <Text maxW="xl" mb={5}>
          Log in to get access to create new events, and have your events viewed
          worldwide
        </Text>
        <form onSubmit={handleSignUp}>
          <VStack spacing={4}>
            <Input placeholder="Nama" size="lg" name="userName" />
            <Input
              placeholder="Phone Number"
              size="lg"
              name="phoneNumber"
              type="number"
            />
            <Input placeholder="Email" size="lg" name="email" />
            <InputGroup size="lg">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button w="100%" colorScheme="yellow" size="lg" type="submit">
              Sign Up
            </Button>
          </VStack>
        </form>
      </Container>
    </div>
  );
}
