import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import styled from "styled-components"

export const Review = ({ image, heading, text }) => {
    return (
        <DIV>
            <Box p={4} display={{md: "flex" }}>
                
                <Box flexShrink={0}>
                    <Image
                         className='my'
                        borderRadius="lg"
                        width={{ 'base': 200, 'sm': 260,'md': 320,'lg': 450 }}
                        src={image}
                        alt="Woman paying for a purchase"
                    />
                </Box>
              
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Text
                       className='headingImage'
                        fontWeight="bold"
                        fontSize={{ base: 16, sm: 16, md: 15, lg: 20}}
                        letterSpacing="wide"
                        color="#2e3856"
                        fontFamily="hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif"
                        // style={{ marginTop: '50px' }}
                    >
                        {heading}
                    </Text>

                    <Text mt={5}
                        fontSize={{ base: 16, sm: 16, md: 15, lg: 20 }}
                        color="black"
                        className='text'
                    >
                        {text}
                    </Text>



                    {/* {appleStore === "" && <div style={{ display: "flex" }}>
                        <Image style={{ width: '15%' }} src={appleStore} alt='Apple Store' />
                        <Image style={{ width: '15%' }} src={googlePlay} alt='Google Play' />
                    </div>
                    } */}

                </Box>
            </Box>
        </DIV>
    )
}

const DIV = styled.div`
    .headingImage{
        margin-top: 50px;

    }

    @media screen and (max-width: 986px) {
      /* Your styles for large devices go here */
      
   .my{
    
    margin-left: 100px;
   }

   .headingImage{
    /* border: 2px solid blue; */
    margin-top: 20px;
    /* width: 70%; */
   }

   .text{

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
