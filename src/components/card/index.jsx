import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import React from 'react';

export default function Card({ eventProperty }) {
  return (
    <Box
      borderRadius="md"
      h="full"
      boxShadow="base"
      _hover={{
        boxShadow: ['base', 'xl'],
        transform: [null, 'rotate(1deg) scale(1.05) translateY(-12px)'],
      }}
      transition="all 200ms"
      w={['full', 'sm', 'xs']}
      overflow="hidden"
      bg="white"
    >
      <Image
        alt="event image"
        borderRadius="md"
        h={36}
        objectFit="cover"
        objectPosition="top"
        src={eventProperty.url}
        width="full"
      />
      <Stack p={4} spacing={4} h="full">
        <Text>
          {eventProperty.type} / {eventProperty.category}
        </Text>
        <Heading as="h4" size="md">
          {eventProperty.eventTitle}
        </Heading>
        <Text>Event by, {eventProperty.organizer}</Text>
        <Heading as="h4" size="md">
          {eventProperty.eventDate}, {eventProperty.eventTime}
        </Heading>
        <Button as={Link} to={{pathname:'event-detail', state: eventProperty}}>
          See details
        </Button>

    
      </Stack>
    </Box>
  );
}
