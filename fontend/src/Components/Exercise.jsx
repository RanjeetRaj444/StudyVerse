import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
  } from '@chakra-ui/react'
import styled from "styled-components"
import { useEffect } from 'react'

export const Exercise = () => {

    useEffect(()=>{}, [])
  return (
    <DIV>
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton style={{backgroundColor: "white"}}>
        <Box as="span" flex='1' textAlign='left'>
          <span style={{color: "#2e3856", fontWeight: "bold"}}>Chapter 1:</span> Introduction: Matter, Energy, Measurement
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div>

        <div className='scroll'>
          
          <div style={{backgroundColor: "white"}}>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div style={{backgroundColor: "white"}}>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div style={{backgroundColor: "white"}}>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>

          <div>
          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 11
          </Text>
          </div>
          
        </div>


        <div style={{backgroundColor: "white"}}>
        <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
          Page 12
          </Text>
        </div>


      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem style={{marginTop: "15px"}}>
    <h2>
      <AccordionButton style={{backgroundColor: "white"}}>
        <Box as="span" flex='1' textAlign='left'>
        <span style={{color: "#2e3856", fontWeight: "bold"}}>Chapter 1:</span> Introduction: Matter, Energy, Measurement
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>

   <div style={{marginTop: "80px"}}>
   At Quizlet, were giving you the tools you need to take on any subject without having to carry around solutions manuals or printing out PDFs! Now, with expert-verified solutions from Chemistry: The Central Science 14th Edition, you’ll learn how to solve your toughest homework problems. Our resource for Chemistry: The Central Science includes answers to chapter exercises, as well as detailed information to walk you through the process step by step. With Expert Solutions for thousands of practice problems, you can take the guesswork out of studying and move forward with confidence.
   </div>
    </DIV>
  )
}


const DIV = styled.div`

.scroll{
    width: 400px;
  height: 200px;
  overflow: scroll;
}
    
`