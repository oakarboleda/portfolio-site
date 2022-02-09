import React from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
} from '@chakra-ui/react';
import './Skills.scss';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiTypescript,
} from 'react-icons/si';
import { programmingLanguages,data, fnl, snt } from '../../resumeData';



const Skills = () => {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
                <Heading mb="6" >
                  Skills
                </Heading>
                <Text fontSize="lg" >
                  These are are things I have worked with.
                </Text>
              </Box>
              <Flex justify="space-between" wrap="wrap">
                <SkillBlocks
                  title="Programming languages"
                  itemsArray={programmingLanguages}
                />
                <SkillBlocks title="Data" itemsArray={data} />
              </Flex>
              <Flex justify="space-between" wrap="wrap">
                <SkillBlocks
                  title="Frameworks Libraries"
                  itemsArray={fnl}
                />
                <SkillBlocks
                  title="Other Skills Tools"
                  itemsArray={snt}
                />
              </Flex>
          </Stack>
            </Stack>
         </Container>
    </Box>

  );
}
function SkillBlocks({ title, itemsArray }) {
  return (
    <Box width={{ base: '100%', md: '45%' }} mb="6">
      <Heading mb="6" size="md">
        {title}
      </Heading>
      {itemsArray &&
        itemsArray.map((item, index) => {
          return (
            <Text fontSize="md"  mb="2" key={index}>
              {item}
            </Text>
          );
        })}
    </Box>
  );
}


export default Skills;
