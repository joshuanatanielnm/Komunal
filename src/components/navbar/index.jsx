import * as React from 'react';

import {
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
} from '@chakra-ui/react';

import { BrowserRouter as Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <Container maxW="6xl" mt={5} mb={10}>
      <Flex>
        <Link cursor="pointer">
          <Image src={logo} w={150} />
        </Link>

        <Spacer />

        <Flex Spacer={2}>
          <Button variant="ghost" size="lg">
            <Link>Create Event</Link>
          </Button>
          <Button variant="ghost" size="lg">
            <Link>Sign In</Link>
          </Button>
        </Flex>
      </Flex>

      <Divider mt={5} />
    </Container>
  );
}
