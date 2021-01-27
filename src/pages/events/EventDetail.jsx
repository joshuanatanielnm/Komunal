import { Box, Button, Container, HStack, Heading, Image, Link, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import {FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton} from "react-share";

import Footer from '../../components/footer';
import Navbar from '../../components/navbar/index';
import React from 'react'

export default function EventDetail(params) {
  const {state} = params.location
  console.log(state)
  return (
    <Container maxW='6xl'>
      <Navbar/>
      <Stack bg='black' color='white' p='10' spacing='10' rounded='lg'>
        <Heading as='h3' size='xl'>
          {state.eventTitle}
        </Heading>
        <Image
          alt="event image"
          borderRadius="md"
          objectFit="cover"
          objectPosition="top"
          src={state.url}
          maxH='xl'
          width="full"
        />
        <Stack direction={{base:'column', md:'row'}}>
          <VStack align='flex-start' spacing='10'>
            <Heading as='h5' size='md'>
            {state.type} {state.category} by {state.organizer}
            </Heading>

            <VStack align='flex-start'>
              <Heading as='h3' size='xl'>
              {state.eventDate}
              </Heading>
              <Heading as='h3' size='xl'>
              {state.eventTime}
              </Heading>
            </VStack>

          </VStack>

            <Spacer/>
            <VStack align='flex-end'>
              <Heading as='h5' size='md'>Share to social media</Heading>
              <HStack>
                <FacebookShareButton
                  url={"http://komunal.vercel.app/"}
                  quote={"Komunal - Connect with people with same interest"}
                  hashtag="#Komunal">
                  <FacebookIcon size={36} />
                </FacebookShareButton>

                <TwitterShareButton
                  url={"http://komunal.vercel.app/"}
                  quote={"Komunal - Connect with people with same interest"}
                  hashtag="#Komunal">
                  <TwitterIcon size={36} />
                </TwitterShareButton>

                <LinkedinShareButton
                  url={"http://komunal.vercel.app/"}
                  quote={"Komunal - Connect with people with same interest"}
                  hashtag="#Komunal">
                  <LinkedinIcon size={36} />
                </LinkedinShareButton>
              </HStack>
            </VStack>
        </Stack>

        <Text fontSize="xl">
          {state.desc}
        </Text>

        <Button
          as={Link}
          colorScheme='yellow'
          href={`${state.linkRegistration}`}
          target="_blank"
          rel="noopener noreferrer"
          textAlign="center"
          fontSize="2xl"
          h='20'
          textDecoration='none'
          p={1}
        >
          Join Event
        </Button>
      </Stack>
      <Footer/>
    </Container>
  )
}
