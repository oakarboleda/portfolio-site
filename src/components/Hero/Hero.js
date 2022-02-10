import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import {illustration} from "../../resumeData";
import girl from "../../assets/lottie/44975-girl-with-a-cup-of-coffee.json";
import { Flex, Text, Heading, Stack } from '@chakra-ui/react';
import "./Hero.scss";
import Hello from "../Hello/Hello";
import Lottie from "lottie-react";
import { particles } from "./particles";
import 'particles.js';
import TypedText from '../TypedText/TypedText';



export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref

  }
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = false;
    script.innerHTML = (particles);
    document.body.appendChild(script);
  }
  render() {
    return(
      <div className="canvas">
        <div id='particles-js'/>
        <Stack className="Hero" id="Hero" minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={5} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading>
              <Text
                as={'span'}
                position={'relative'}>
                <Hello />
                <Text fontSize='lg'>I am</Text>
                <Text fontSize='3xl'>Oak Arboleda</Text>
                <TypedText/>
              </Text>
              <br />{' '}
            </Heading>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Stack>
        </Flex>
          <Flex p={5} flex={1} align={'center'} justify={'center'}>
            <div className="my-image">
              {illustration.animated ? (
                <Lottie animationData={girl} />
              ) : (
                <img className="profile" alt="profile"/>
              )}
            </div>

        </Flex>

      </Stack>
    </div>
   )
  }

}
