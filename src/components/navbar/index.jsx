import * as React from 'react';

import {
  Button,
  Container,
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
    <Container maxW="6xl" d="flex" as={Stack} mt={5}>
      <HStack>
        <Link cursor="pointer">
          <Image src={logo} w={150} />
        </Link>

        <Spacer />

        <HStack spacing={5}>
          <Button variant="ghost">
            <Link>Create Event</Link>
          </Button>
          <Button variant="ghost">
            <Link>Sign In</Link>
          </Button>
        </HStack>
      </HStack>
    </Container>
  );
}
