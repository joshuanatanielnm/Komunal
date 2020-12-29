import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  WrapItem,
} from '@chakra-ui/react';

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
        <Link
          colorScheme="gray"
          href={`https://${eventProperty.linkRegistration}`}
          target="_blank"
          rel="noopener noreferrer"
          textAlign="center"
          bg="gray.200"
          fontSize="lg"
          p={1}
        >
          Join Event
        </Link>
      </Stack>
    </Box>
  );
}
