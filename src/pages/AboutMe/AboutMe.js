import React from 'react';
import './AboutMe.scss';
import { Box, Text, Stack, Container, Button } from '@chakra-ui/react';
import { about } from '../../resumeData';


const AboutMe = ({ heading, message, link, imgSize, resume }) => {

  React.useEffect(() => {

  })
  let profilePicUrl = "";
  return (
    <Container maxW={'7xl'} zIndex={10} position={'relative'} id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'3xl'}>
          <img
              src={profilePicUrl}
              alt="profilepicture"
            /></Stack>
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
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
    </Box>
    </Container>



  )
}

export default AboutMe;
