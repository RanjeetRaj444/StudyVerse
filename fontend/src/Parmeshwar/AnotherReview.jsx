import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const AnotherReview = () => {
  return (
    <div>
            <Box p={4} display={{ md: "flex" }}>
               
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Text
                        fontWeight="bold"
                        fontSize={{base: 16, md: 24, lg: 30, xl: 35}}
                        letterSpacing="wide"
                        color="#2e3856"
                        fontFamily="hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif"
                        style={{marginTop: '50px'}}
                    >
                       Written by experts and verified for accuracy
                    </Text>
                    
                    <Text mt={5}
                    fontSize={{base: 16, md: 22}}
                     color="black"
                     style={{paddingRight: '10px'}}
                     >
                        Textbook solutions are written by subject-matter experts and verified for accuracy to provide you with the best quality homework help for challenging problems. To ensure the highest level of accuracy, the verification process involves a multi-step approach that includes multiple rounds of review and feedback before any textbook solution is published.
                    </Text>
                </Box>

                <Box flexShrink={0}>
                    <Image
                        borderRadius="lg"
                        width={{ 'xl': 450 }}
                        src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/written-by-experts-day.921ce2b4.svg"
                        alt="Woman paying for a purchase"
                    />
                </Box>
            </Box>
        </div>
  )
}
