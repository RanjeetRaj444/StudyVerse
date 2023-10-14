import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Middlepart3() {
  return (
    <>
    {/* 1 */}
    <Box >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mb={{ base: 6, md: 0 }}
        align={{ base: 'center', md: 'stretch' }}
        justify="space-around"
        justifyContent={"center"}
        p={4}
        h={"400px"}
        
        
      >
        <Box
          w={{ base: '100%', md: '40%' }}
          mb={{ base: 4, md: 0 }}
          textAlign={"left"}

        >
          <Heading as='h2' size='xl' mb={"25px"}>
            Magically transform your notes with AI
          </Heading>
          <Text fontSize='lg' mb={"25px"}>
            Magic Notes saves you time by turning your notes into flashcards, practice tests, outlines and more
          </Text>
          <Button mb={"25px"} w={"200px"} h="50px" bg={"#2550d5"} color={"white"}>
            Try It out
          </Button>
        </Box>

        <Box textAlign="center" p={4} w={{ base: '100%', md: '40%' }} >
        <iframe
            title="Vimeo Video"
            src="https://player.vimeo.com/video/850715020?autoplay=1&muted=1&loop=1" // Add the loop parameter
            width="100%"
            height="100%"
            controls={false}
            allowFullScreen
          ></iframe>
        </Box>

      </Flex>
    </Box>
    {/* 2 */}
    <Box  >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mb={{ base: 6, md: 0 }}
        align={{ base: 'center', md: 'stretch' }}
        justify="space-around"
   
        p={4}
        h={"400px"}
    
        
      >
           <Box textAlign="left" p={4} w={{ base: '100%', md: '40%' }}>
        <iframe
            title="Vimeo Video"
           
            src="https://player.vimeo.com/video/850716020?autoplay=1&muted=1&loop=1" // Add the loop parameter
            width="100%"
            height="100%"
            controls={false}
            allowFullScreen
          ></iframe>
        </Box>
        <Box
          w={{ base: '100%', md: '40%' }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as='h2' size='xl' mb={"25px"}>
          Meet your new AI tutor
          </Heading>
          <Text fontSize='lg' mb={"25px"}>
          Quiz Me. Teach me. Apply My Knowledge. Try these prompts with Q-Chat.          </Text>
          <Button mb={"25px"} w={"200px"} h="50px" bg={"#2550d5"} color={"white"}>
           Start a chat
          </Button>
        </Box>

     

      </Flex>
    </Box>

      {/* 3 */}
      <Box >
      <Flex
          h={"400px"}
        direction={{ base: 'column', md: 'row' }}
        mb={{ base: 6, md: 0 }}
        align={{ base: 'center', md: 'stretch' }}
        justify="space-around"
        justifyContent={"center"}
        p={4}
        
      >
        <Box
          w={{ base: '100%', md: '40%' }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as='h2' size='xl' mb={"25px"}>
          Get personalized homework help
          </Heading>
          <Text fontSize='lg' mb={"25px"}>

          StudyBuddy's Expert Solutions combine millions of verified explanations with AI-powered tutoring so you can tackle homework assignments.
          </Text>
          <Button mb={"25px"} w={"200px"} h="50px" bg={"#2550d5"} color={"white"}>
            Find your textbook
          </Button>
        </Box>

        <Box textAlign="center" p={4} w={{ base: '100%', md: '40%' }}>
        <iframe
            title="Vimeo Video"
            src="https://player.vimeo.com/video/850716640?autoplay=1&muted=1&loop=1" // Add the loop parameter
            width="100%"
            height="100%"
            controls={false}
            allowFullScreen
          ></iframe>
        </Box>

      </Flex>
    </Box>
    {/* 4 */}
    <Box >
      <Flex
          h={"400px"}
        direction={{ base: 'column', md: 'row' }}
        mb={{ base: 6, md: 0 }}
        align={{ base: 'center', md: 'stretch' }}
        justify="space-around"
        justifyContent={"center"}
        p={4}
        
      >
           <Box textAlign="center" p={4} w={{ base: '100%', md: '40%' }}>
        <iframe
            title="Vimeo Video"
            src="https://player.vimeo.com/video/850716299?autoplay=1&muted=1&loop=1" // Add the loop parameter
            width="100%"
            height="100%"
            controls={false}
            allowFullScreen
          ></iframe>
        </Box>
        <Box
          w={{ base: '100%', md: '40%' }}
          mb={{ base: 4, md: 0 }}
        >
          <Heading as='h2' size='xl' mb={"25px"}>
       Be ready for test day
          </Heading>
          <Text fontSize='lg' mb={"25px"}>
          Turn your flashcards into practice tests. Enhanced by AI, Learn and Test mode help you memorize everything you need to know.
                 </Text>
          <Button mb={"25px"} w={"200px"} h="50px" bg={"#2550d5"} color={"white"}>
            Get started
          </Button>
        </Box>
      </Flex>
    </Box>
    </>
  );
}
