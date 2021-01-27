import { Container, Heading, Wrap, WrapItem } from '@chakra-ui/react';

import Card from './../card/index';
import React from 'react';
import useFirestore from '../../hooks/useFirestore';

export default function Event() {
  const { docs } = useFirestore('Event');

  return (
    <Container maxW="6xl" bg="black" borderRadius="2xl">
      <Heading color="white" textAlign="center" pt={10}>
        Popular Event
      </Heading>
      <Wrap spacing={4} justify="center" align="stretch" py={10}>
        {docs.map((value, index) => (
          <WrapItem key={index}>
            <Card eventProperty={value} />
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
}
