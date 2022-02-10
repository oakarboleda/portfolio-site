import React from 'react';
import './AboutMe.scss';
import { Flex, Box, Text, Stack, Container, Button, Image } from '@chakra-ui/react';
import { about } from '../../resumeData';


const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  return (
    <Container maxW={'7xl'} zIndex={10} position={'relative'} id="aboutme" className="jumbotron">
      <Flex p={5} flex={1} align={'center'} justify={'center'}>
        <Stack align={'center'} justify={'center'}>
          <Box boxSize='sm'>
            <Image
              src='oak.png'
              fallbackSrc='https://via.placeholder.com/150'
              alt='Oak Arboleda'
            />
          </Box>
        </Stack>
        <Stack align={'center'} justify={'center'}>
        <Text className="display-4 mb-5 text-center">{about.heading}</Text>
        <Text className="lead text-center">{about.message}</Text>
        {about.resume && (
          <p className="lead text-center">
            <Button
              className="btn btn-outline-dark btn-lg"
              href={resume}
              target="_blank"
              rel="noreferrer noopener"
              role="button"
              aria-label="Resume/CV"
            >
              Resume
            </Button>
          </p>
        )}
      </Stack>
      </Flex>
    </Container>
  )
}



export default AboutMe;
