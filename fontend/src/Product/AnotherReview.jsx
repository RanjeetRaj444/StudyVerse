import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

export const AnotherReview = () => {
    return (
        <DIV>
            <Box p={4} display={{ md: "flex" }}>

                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Text
                        className='headingImage'
                        fontWeight="bold"
                        fontSize={{ base: 16, sm: 16, md: 15, lg: 20 }}
                        letterSpacing="wide"
                        color="#2e3856"
                        fontFamily="hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif"
                    // style={{marginTop: '50px'}}
                    >
                        Written by experts and verified for accuracy
                    </Text>

                    <Text mt={5}
                        fontSize={{ base: 16, sm: 16, md: 15, lg: 20 }}
                        color="black"
                        style={{ paddingRight: '10px' }}
                        className='text'
                    >
                        Textbook solutions are written by subject-matter experts and verified for accuracy to provide you with the best quality homework help for challenging problems. To ensure the highest level of accuracy, the verification process involves a multi-step approach that includes multiple rounds of review and feedback before any textbook solution is published.
                    </Text>
                </Box>

                <Box flexShrink={0}>
                    <Image
                        className='my'
                        borderRadius="lg"
                        width={{'base': 200,  'sm': 260, 'md': 320, 'lg': 450 }}
                        src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/written-by-experts-day.921ce2b4.svg"
                        alt="Woman paying for a purchase"
                    />
                </Box>
            </Box>
        </DIV>
    )
}

const DIV = styled.div`
    @media screen and (max-width: 986px) {
      /* Your styles for large devices go here */
        .my{
    /* border: 2px solid red; */
    /* margin-top: 80px; */
    margin-left: 100px;
   }
   

   .headingImage{
    /* border: 2px solid blue; */
    margin-top: 20px;
    /* width: 70%; */
   }

   .text{
    /* border: 2px solid green; */
    /* width: 70%; */
   }
     
    }


     @media screen and (max-width: 500px) {
      /* Your styles for large devices go here */
      
   .my{
    
    
    margin-left: 60px;
   }

     
    }



    @media screen and (max-width: 330px) {
      /* Your styles for large devices go here */
      
   .my{
    
    
    margin-left: 5px;
   }

     
    }
`
