import {
  Button,
  Container,
  Divider,
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <Container maxW="6xl" mt={5} mb={10}>
      <Flex>
        <Link cursor="pointer" to="/" type="link">
          <Image src={logo} w={150} />
        </Link>

        <Spacer />

        <Flex>
          <Link to="/create-event">
            <Button variant="ghost" size="md" href="/create-event" type="link">
              Create Event
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button variant="ghost" size="md" type="link">
              Sign In
            </Button>
          </Link>
        </Flex>
      </Flex>

      <Divider mt={5} />
    </Container>
  );
}
