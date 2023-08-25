import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Middlepart2() {
  return (
    <>



       <Box textAlign="center" p="20px">
       <Heading as='h2' size='xl'>
       Coming soon to Quizlet
  </Heading>
        
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        width={{ base: '100%', md: '80%' }}
        margin="auto"
        p={4}
        textAlign={"center"}
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" 
      >
        <Box w={{ base: '100%', md: '300px' }} mb={{ base: 8, md: 0 }} >
          <Image w={{ base: '150px', md: '200px' }} src="https://quizlet-web.cdn.prismic.io/quizlet-web/1691192080050_04MemoryScore.svg?auto=compress,format" alt="" />
          <Heading as="h4" size="md">
            Memory Score
          </Heading>
          <Text fontSize="md">
            Track your Memory Score to follow your long-term recall over time
          </Text>
        </Box>
        <Box w={{ base: '100%', md: '300px' }} mb={{ base: 8, md: 0 }}>
          <Image w={{ base: '150px', md: '200px' }} src="https://quizlet-web.cdn.prismic.io/quizlet-web/ca563c02-e344-4344-be6a-b46185d0b5f7_05+Essay+Starter.svg?auto=compress,format" alt="" />
          <Heading as="h4" size="md">
            Essay Starter
          </Heading>
          <Text fontSize="md">
            Tired of staring at a blank page? Get inspiration on how to start writing
          </Text>
        </Box>
        <Box w={{ base: '100%', md: '300px' }} mb={{ base: 8, md: 0 }}>
          <Image w={{ base: '150px', md: '200px' }} src="https://images.prismic.io/quizlet-web/4488d28c-2b01-4c71-b878-e2daa0fc6dfc_06+Summarizer.png?auto=format,compress" alt="" />
          <Heading as="h4" size="md">
            Quick Summary
          </Heading>
          <Text fontSize="md">
            Zero in on the important concepts you need to know
          </Text>
        </Box>
        <Box w={{ base: '100%', md: '300px' }}>
          <Image w={{ base: '150px', md: '200px' }} src="https://quizlet-web.cdn.prismic.io/quizlet-web/f70e0753-df34-4dc6-95eb-0d31d3650dfd_07+Brain+Beats+%281%29.svg?auto=compress,format" alt="" />
          <Heading as="h4" size="md">
            Brain Beats
          </Heading>
          <Text fontSize="md">
            Make concepts stick with catchy beats set to your very own flashcards
          </Text>
        </Box>
      </Flex>
    </Box>
        
    </>
  )
}
