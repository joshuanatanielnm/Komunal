import { Box, Container, Divider, Heading, Link, Spacer, Stack, VStack } from '@chakra-ui/react';

import React from 'react';

export default function Footer() {
  return (
    <Container maxW="6xl" mx='auto' mb='5'>
      <Divider my={5} />
      <Stack direction={{base: 'column', md: 'row'}}>
        <VStack align='flex-start' spacing={4}>
          <Box as={Heading} size='sm'>
            Create this website for electronic business course
          </Box>
          <Box>
            Made using <Link fontWeight="bold" size='sm' href='https://reactjs.org/'>Reactjs</Link>, <Link fontWeight="bold" size='sm' href='https://chakra-ui.com/'>Chakra UI</Link>, <Link fontWeight="bold" size='sm' href='https://firebase.google.com/'>Firebase</Link>
          </Box>
          <Box mt='5'>
            Created by @joshuanatanielm
          </Box>
        </VStack>

        <Spacer/>

        <VStack align={{base:'flex-start', md:'flex-end'}} >
          <Box as={Heading} size='sm'>
            Socials
          </Box>
          <Link href="https://www.instagram.com/joshuanatanielm/">
            Instagram
          </Link>
          <Link href='https://twitter.com/joshuanatanielm'>
            Twitter
          </Link>
          <Link href='https://www.linkedin.com/in/joshua-manuputty-8a22ba186/'>
            Linked In
          </Link>
        </VStack>
      </Stack>
    </Container>
  );
}
