import { Container, Heading, Wrap, WrapItem } from '@chakra-ui/react';

import Card from './../card/index';
import React from 'react';
import useFirestore from '../../hooks/useFirestore';

export default function Event() {
  const property = [
    {
      eventTitle: 'Understanding Social Media Tools to Boost Up',
      eventOrganizer: 'Ma-Tech',
      eventType: 'Webinar',
      eventCategory: 'Marketing',
      eventLink: 'https://chakra-ui.com/docs/layout/box',
      eventImage:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      eventDate: '20 September',
      eventTime: '18:30',
    },
    {
      eventTitle: 'Understanding Social Media Tools to Boost Up',
      eventOrganizer: 'Ma-Tech',
      eventType: 'Webinar',
      eventCategory: 'Marketing',
      eventLink: 'https://chakra-ui.com/docs/layout/box',
      eventImage:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      eventDate: '20 September',
      eventTime: '18:30',
    },
    {
      eventTitle: 'Understanding Social Media Tools to Boost Up',
      eventOrganizer: 'Ma-Tech',
      eventType: 'Webinar',
      eventCategory: 'Marketing',
      eventLink: 'https://chakra-ui.com/docs/layout/box',
      eventImage:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      eventDate: '20 September',
      eventTime: '18:30',
    },
    {
      eventTitle: 'Understanding Social Media Tools to Boost Up',
      eventOrganizer: 'Ma-Tech',
      eventType: 'Webinar',
      eventCategory: 'Marketing',
      eventLink: 'https://chakra-ui.com/docs/layout/box',
      eventImage:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      eventDate: '20 September',
      eventTime: '18:30',
    },
    {
      eventTitle: 'Understanding Social Media Tools to Boost Up',
      eventOrganizer: 'Ma-Tech',
      eventType: 'Webinar',
      eventCategory: 'Marketing',
      eventLink: 'https://chakra-ui.com/docs/layout/box',
      eventImage:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      eventDate: '20 September',
      eventTime: '18:30',
    },
    {
      eventTitle: 'Understanding Social Media Tools to Boost Up',
      eventOrganizer: 'Ma-Tech',
      eventType: 'Webinar',
      eventCategory: 'Marketing',
      eventLink: 'https://chakra-ui.com/docs/layout/box',
      eventImage:
        'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      eventDate: '20 September',
      eventTime: '18:30',
    },
  ];

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
