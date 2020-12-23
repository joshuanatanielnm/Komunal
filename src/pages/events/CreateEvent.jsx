import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from './../../firebase/config';

import Navbar from '../../components/navbar/index';

export default function CreateEvent({ history }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const types = ['image/png', 'image/jpg', 'image/jpeg'];
  const uploadClick = () => {
    document.getElementById('upload-image').click();
  };

  const changeHandler = e => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('please select an image file png or jpg');
      alert(error);
    }
  };

  const handleCreateEvent = useCallback(
    async event => {
      event.preventDefault();
      const {
        eventTitle,
        organizer,
        type,
        category,
        linkRegistration,
        eventDate,
        eventTime,
      } = event.target.elements;

      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection('Event');

      storageRef.put(file).on('state_changed', async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({
          eventTitle: eventTitle.value,
          organizer: organizer.value,
          type: type.value,
          category: category.value,
          linkRegistration: linkRegistration.value,
          eventDate: eventDate.value,
          eventTime: eventTime.value,
          url,
          createdAt,
        });
        setUrl(url);
      });

      history.push('/');
    },
    [history, file]
  );

  return (
    <div>
      <Navbar />
      <Container maxW="3xl" as={Stack}>
        <Heading>Basic Info</Heading>
        <Text maxW="xl" mb={5}>
          Name your event and tell event-goers why they should come. Add details
          that highlight what makes it unique.
        </Text>
        <form onSubmit={handleCreateEvent}>
          <VStack spacing={4}>
            <Input placeholder="Event Title" size="lg" name="eventTitle" />
            <Input placeholder="Organizer" size="lg" name="organizer" />
            <HStack w="100%" spacing={3}>
              <Select placeholder="Type" size="lg" name="type">
                <option value="Seminar">Seminar</option>
                <option value="Webinar">Webinar</option>
                <option value="Meetup">Meetup</option>
              </Select>

              <Select placeholder="Category" size="lg" name="category">
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Scince">Scince</option>
              </Select>
            </HStack>
            <Input
              placeholder="Link registration"
              size="lg"
              name="linkRegistration"
            />

            <Box
              bg="black"
              w="100%"
              p={4}
              color="white"
              align="center"
              onClick={uploadClick}
              cursor="pointer"
            >
              Upload image
            </Box>

            <Center>{file && <div>{file.name}</div>}</Center>

            <Input
              type="file"
              placeholder="Link registration"
              size="lg"
              hidden
              id="upload-image"
              onChange={changeHandler}
              name="eventImage"
            />
          </VStack>
          <br />
          <Heading>Date & Time</Heading>
          <Text maxW="xl" mb={5}>
            Tell event-goers when your event starts and ends so they can make
            plans to attend
          </Text>
          <Flex mb={10}>
            <Input
              type="date"
              placeholder="Start date"
              size="lg"
              id="eventDate"
              name="eventDate"
            />
            <Box w={5} />
            <Input
              type="time"
              placeholder="Start time"
              size="lg"
              id="eventTime"
              name="eventTime"
            />
          </Flex>

          <Button w="100%" colorScheme="yellow" mb={10} size="lg" type="submit">
            Create Event
          </Button>
        </form>
      </Container>
    </div>
  );
}
