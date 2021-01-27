import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react';
import React, { useCallback, useContext, useState } from 'react';
import { Redirect, withRouter } from 'react-router';

import { AuthContext } from '../../hooks/Auth';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import { projectAuth } from '../../firebase/config';

export default function SignIn({ history }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await projectAuth.signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push('/create-event');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Box>
      <Navbar />
      <Container maxW="3xl" as={Stack}>
        <Heading>Sign In</Heading>
        <Text maxW="xl" mb={5}>
          Log in to get access to create new events, and have your events viewed
          worldwide
        </Text>
        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
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
              Sign In
            </Button>
          </VStack>
        </form>

        <Text>
          Didn't have an account ?{' '}
          <Link to="/sign-up" style={{ fontWeight: 700 }}>
            Sign Up
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
