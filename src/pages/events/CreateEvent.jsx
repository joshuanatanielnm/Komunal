import * as React from 'react';

import {
  Box,
  Button,
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

import Navbar from '../../components/navbar/index';

export default function CreateEvent() {
  const uploadClick = () => {
    document.getElementById('upload-image').click();
  };
  return (
    <div>
      <Navbar />
      <Container maxW="3xl" as={Stack}>
        <Heading>Basic Info</Heading>
        <Text maxW="xl" mb={5}>
          Name your event and tell event-goers why they should come. Add details
          that highlight what makes it unique.
        </Text>
        <VStack spacing={4}>
          <Input placeholder="Event Title" size="lg" />
          <Input placeholder="Organizer" size="lg" />
          <HStack w="100%" spacing={3}>
            <Select placeholder="Type" size="lg">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>

            <Select placeholder="Category" size="lg">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </HStack>
          <Input placeholder="Link registration" size="lg" />

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

          <Input
            type="file"
            placeholder="Link registration"
            size="lg"
            hidden
            id="upload-image"
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
            id="upload-image"
            onfocus="(this.type='date')"
          />
          <Box w={5} />
          <Input
            type="time"
            placeholder="Start time"
            size="lg"
            id="upload-image"
            onfocus="(this.type='time')"
          />
        </Flex>

        <Button w="100%" colorScheme="yellow" mb={10} size="lg">
          Create Event
        </Button>
      </Container>
    </div>
  );
}
