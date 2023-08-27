import React from 'react';
import { Box, Heading, Image, Text, Flex, Button, VStack, HStack, Spacer } from '@chakra-ui/react';

import Middlepart3 from './middlepart3';

export default function Middlepart() {
  return (
    <>

        {/* banner */}
        <Box position="relative">
      {/* Text overlay */}
      <Box
        position="absolute"
        top="50%"
        left="0" // Align the left edge of the overlay with the left edge of the image
       transform="translateY(-60%)" // Center the overlay vertically
        textAlign="left"
        color="white"
        p={4}
        
        borderRadius="md"
        w={{ base: '100%', md: '40%' }} // Adjust the width for responsiveness
      >
         <Box textAlign="center" padding="20px">
      <Heading as="h5" size="md" marginBottom="5px">
        Experience a new era of AI-enhanced learning
      </Heading>
      <Text fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }} marginBottom="5px">
        Quizlet is more than flashcards: it’s the #1 global learning platform. Join our community of 300 million learners using Quizlet’s practice tests, Expert Solutions and AI-powered tools to improve their grades and reach their goals.
      </Text>
      <Button fontSize={{ base: "1rem", md: "1.2rem", lg: "1.5rem" }}>Sign up now</Button>
    </Box>
      </Box>

      {/* Image */}
      <Image
        src='https://images.prismic.io/quizlet-web/1691181762152_Full-BleedImage.png?auto=format,compress'
        alt=''
        w="100%"
      />
    </Box>

    {/* mp2 */}
<Box>
    <Box bg="#edeff4" w={"100%"} m="auto">
      
      <Heading as="h2" size="2xl" textAlign="center" p="50px">
        Ace your classes with our new suite of study tools
      </Heading>
     
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap" // Allow items to wrap on smaller screens
        gap="50px"
        boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p="50px"
        bg={"white"}
      w="100%"
      >
        {/* Feature 1 */}
        <Box w={{ base: '100%', md: '30%' }} mb={{ base: '40px', md: 0 }}   bg={"white"} >
          <Image src="https://quizlet-web.cdn.prismic.io/quizlet-web/5d374190-25dd-4230-8161-78ff1f963467_01+Magic+Notes+Test.svg?auto=compress,format" alt="" />
          <Heading as="h4" size="md">
            Create Magic Notes
          </Heading>
          <Text fontSize="md">Get flashcards, practice tests and more in one click</Text>
        </Box>

        {/* Feature 2 */}
        <Box w={{ base: '100%', md: '30%' }} mb={{ base: '40px', md: 0 }}>
          <Image src="https://quizlet-web.cdn.prismic.io/quizlet-web/f71461c7-0790-48b1-aefb-1dee9d17b262_02+Q-chat.svg?auto=compress,format" alt="" />
          <Heading as="h4" size="md">
            Meet Q-Chat: your AI tutor
          </Heading>
          <Text fontSize="md">Engage with your highly responsive study partner</Text>
        </Box>

        {/* Feature 3 */}
        <Box w={{ base: '100%', md: '30%' }}>
          <Image src="https://quizlet-web.cdn.prismic.io/quizlet-web/843e2563-9eed-4a9e-ac71-992941f157e6_03+Expert+solutions.svg?auto=compress,format" alt="" />
          <Heading as="h4" size="md">
            Get Expert Solutions
          </Heading>
          <Text fontSize="md">Find trustworthy solutions, expert-written and AI-enhanced</Text>
        </Box>

       
      </Box>
      <br />
      <br />
      <br />
      <Button bg="#4255ff" color="white" display="block" mx="auto">
      Get Started
    </Button>   
       <br />
      <br />
      <br />
    </Box>

    </Box>
    {/* ----------------------------------------------- */}
<Middlepart3/>

    <Box bg={"#14125c"} w={"100%"} p="10px" display="flex" flexWrap={"wrap"} justifyContent={"space-around"} textAlign={"center"} 
    
    >
        <Flex width={"80%"}  textAlign={"left"}  >
            <Box color={"white"} >
                <Text>QUIZLET pLUS</Text>
                <Heading as='h2' size='xl' marginBottom={"50px"}>
                Get better grades with the #1 learning platform  
                </Heading>
            
                <Text fontSize='xl' marginBottom={"50px"}>Discover deeper learning with Quizlet Plus</Text>
                <VStack>
                    <HStack >
                        <Image marginBottom={"25px"} src='https://quizlet-web.cdn.prismic.io/quizlet-web/1691184595216_MagicNotes.svg' alt=''/>
                        <Box>
                        <Heading as='h4' size='md' >
                        Magic Notes and Q-Chat
                            </Heading>
                        
                        <Text fontSize='md' marginBottom={"50px"}>
                        Supercharge your studies with our new and cutting-edge AI features
                            </Text>
                        </Box>
                    </HStack>

                </VStack>
                <VStack>
                    <HStack>
                        <Image  marginBottom={"25px"}  src='https://quizlet-web.cdn.prismic.io/quizlet-web/55bb7ec1-28a3-41a4-88ea-d7855f3c5cfa_Test.svg' alt=''/>
                        <Box>
                        <Heading as='h4' size='md' >
                        Personalized study modes                
                                    </Heading>
                        
                        <Text fontSize='md' marginBottom={"50px"}>
                        Elevate your flashcard game with complete access to study modes: Learn and Test                            </Text>
                        </Box>
                    </HStack>

                </VStack>
                <VStack>
                    <HStack>
                        <Image  marginBottom={"25px"}  src='https://quizlet-web.cdn.prismic.io/quizlet-web/1690923488223_Explanations.svg' alt=''/>
                        <Box>
                        <Heading as='h4' size='md' >
                        Millions of trusted solutions
                            </Heading>
                        
                        <Text fontSize='md' marginBottom={"50px"}>
                        Understand tough homework with the combined power of AI and expert-written solutions                            </Text>
                        </Box>
                    </HStack>

                </VStack>
                <Button marginBottom={"50px"}>Get the Best of Quizlet</Button>

            </Box>
            <Box maxWidth={"100%"}>
                <Image  p="2%"  src="https://images.prismic.io/quizlet-web/1690916162480_08ESQplus-webb.gif?auto=format,compress" alt=""/>
            </Box>

        </Flex>
        <Box  position="relative">
            <Box  position="absolute"
        top="50%"
        left="50%" // Align the left edge of the overlay with the left edge of the image
        transform="translate(-50%, -50%)"  >
      
  <Heading as='h2' size='xl' color={"white"}>
  94% of students who use Learn or Test mode say that Quizlet helps them get better grades*  </Heading>
  <Text size='xl' color={"white"}>*381 Quizlet users were surveyed in Dec. 2021</Text>
            </Box>
            <Image src="https://images.prismic.io/quizlet-web/cb385b68-11ca-4653-9f6d-a5c1a463903f_09+Testimonial+BG+%281%29.png?auto=format,compress" alt=""/>
        </Box>

    </Box>



    <Box className='mp8'>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mb={{ base: 6, md: 0 }} // Adjust the margin for mobile
        align={{ base: 'center', md: 'stretch' }} // Align center on mobile, stretch on desktop
        justify="space-around"
        p={4}
        bg={"#d9dde8"}
      >
        <Box
          w={{ base: '100%', md: '40%' }} // Adjust width for mobile and desktop
          mb={{ base: 4, md: 0 }}
         
        >
          <Heading as='h4' size='md' mb={"3px"}>
            TEACHERS
          </Heading>
          <Heading as='h2' size='xl' mb={"25px"}>
            Powerful tools to empower your students
          </Heading>
          <Text fontSize='lg' mb={"25px"}>
            Help every student confidently learn anything. With free study sets,
            study modes, and in-class games like Quizlet Live, you can instantly
            create a more engaged classroom. Students and teachers can sign up
            and study for free.
          </Text>
          <Button mb={"25px"} bg={"#2550d5"} color={"white"}>Sign up for free</Button>
          <Heading as='h3' size='md'color={"#2550d5"} >
       See how teachers use Quizlet
          </Heading>
        </Box>
        <Box w={{ base: '100%', md: '40%' }}>
          <Image
            src="https://images.prismic.io/quizlet-web/1691009868783_10Teachers.png?auto=format,compress"
            alt=""
            w="100%" // Make sure the image scales properly
            maxW="500px" // Set a maximum width for the image
            mx="auto" // Center the image horizontally
          />
        </Box>

      </Flex>
    </Box>
    </>
  );
}
