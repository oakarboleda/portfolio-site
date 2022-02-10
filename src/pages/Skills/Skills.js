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
import { programmingLanguages,data, fnl, snt } from '../../resumeData';



const Skills = () => {
  return (
      <Box>
          <Stack direction={{ base: 'column', lg: 'row' }}>
            <Stack
              flex={1}
              justify={{ lg: 'center' }}>
              <Box>
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
