import { Button, Container, Heading } from '@chakra-ui/react';

import React from 'react';

export default function Hero() {
  return (
    <Container maxW="5xl" mb={14}>
      <Heading as="h1" size="4xl">
        Connect with people with same interest. ✨
      </Heading>
      <Heading as="h3" size="xl" color="gray.400" mt={5} fontWeight="medium">
        Join us and find event, that you interested, or join community that
        available in your city
      </Heading>
      <Button mt={16} size="lg" colorScheme="yellow">
        Browse event
      </Button>
    </Container>
  );
}
