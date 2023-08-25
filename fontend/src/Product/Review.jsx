import { Box, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const Review = ({ image, heading, text, appleStore, googlePlay }) => {
    return (
        <div>
            <Box p={4} display={{ md: "flex" }}>
                <Box flexShrink={0}>
                    <Image
                        borderRadius="lg"
                        width={{ 'xl': 450 }}
                        src={image}
                        alt="Woman paying for a purchase"
                    />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Text
                        fontWeight="bold"
                        fontSize={{ base: 16, md: 24, lg: 30, xl: 35 }}
                        letterSpacing="wide"
                        color="#2e3856"
                        fontFamily="hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif"
                        style={{ marginTop: '50px' }}
                    >
                        {heading}
                    </Text>

                    <Text mt={5}
                        fontSize={{ base: 16, md: 22 }}
                        color="black"
                    >
                        {text}
                    </Text>



                    {appleStore === "" && <div style={{ display: "flex" }}>
                        <Image style={{ width: '15%' }} src={appleStore} alt='Apple Store' />
                        <Image style={{ width: '15%' }} src={googlePlay} alt='Google Play' />
                    </div>
                    }

                </Box>
            </Box>
        </div>
    )
}
