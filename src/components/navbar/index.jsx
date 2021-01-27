import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react';
import React, { useContext } from 'react';

import { AuthContext } from './../../hooks/Auth';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { projectAuth } from '../../firebase/config';

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Container maxW="6xl" mt={5} mb={10}>
      <Flex>
        <Link cursor="pointer" to="/" type="link">
          <Image src={logo} w={150} />
        </Link>

        <Spacer />

        <Flex>
          {/* <Link to="/create-event">
            <Button variant="ghost" size="md" href="/create-event" type="link">
              Your Events
            </Button>
          </Link> */}
          {currentUser ? (
            <Button
              variant="ghost"
              size="md"
              type="link"
              onClick={() => projectAuth.signOut()}
            >
              Logout
            </Button>
          ) : (
            <Box>
              <Link to="/sign-in">
                <Button variant="ghost" size="md" type="link">
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button colorScheme="yellow"  size="md" type="link">
                  Sign Up
                </Button>
              </Link>
            </Box>
          )}
        </Flex>
      </Flex>

      <Divider mt={5} />
    </Container>
  );
}
