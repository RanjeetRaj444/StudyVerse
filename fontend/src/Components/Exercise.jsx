import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Link,
} from '@chakra-ui/react'
import styled from "styled-components"
import { useEffect } from 'react'

export const Exercise = ({ chapter, exercise, solution }) => {
  // console.log(chapter);
  // console.log(exercise);

  useEffect(() => { }, [])
  return (
    <DIV>
      <Accordion allowToggle>
        {
          chapter && chapter.map((el, index) => (

            <AccordionItem key={el.id} style={{ marginTop: "15px" }}>
              <h2>
                <AccordionButton style={{ backgroundColor: "white" }}>
                  <Box as="span" flex='1' textAlign='left'>
                    <span style={{ color: "#2e3856", fontWeight: "bold" }}>{el}</span>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <div style={{display: "flex"}}>

                  <div className='scroll'>

                    {
                      exercise.map((el, index) => (
                        <div style={{ backgroundColor: "white", marginTop: "15px"  }} key={el.id}>
                          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
                            <Link>{el}</Link>
                          </Text>
                        </div>
                      ))
                    }

                  </div>

                  <div>
                  <div style={{ backgroundColor: "white", marginTop: "15px"  }} key={el.id}>
                          <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight={"bold"} color={"#2e3856"}>
                            {solution}
                          </Text>
                        </div>
                  </div>

                </div>
              </AccordionPanel>
            </AccordionItem>
          ))
        }

      </Accordion>

      <div style={{ marginTop: "80px" }}>
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