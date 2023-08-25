import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa';
import {  IconButton, chakra } from '@chakra-ui/react';
import { Heading,Box, Flex, Text, Link, Select, HStack,Image } from '@chakra-ui/react'
export default function Footer() {
  return (
    <>
    <Flex w={"100%"}  direction={{ base: 'column', md: 'row' }} margin={"auto"} textAlign={"center"} justifyContent={"space-around"} p={"10px"} bg={"gray.50"}>
        
        <Box spacing={10} justifyContent={"flex-start"}    width={{ base: '100%', md: 'auto' }}>
            <Heading as='h5' size='sm' marginBottom={"20px"} textAlign={"left"}> 
            About us
            </Heading>
            <Box  display="flex" flexDirection={'column'}  textAlign={"left"}>
            <Link fontSize='md' marginBottom={"20px"}>About Quizlet</Link>
            <Link fontSize='md' marginBottom={"20px"}>How Quizlet works</Link>
            <Link fontSize='md' marginBottom={"20px"}>Careers</Link>
            <Link fontSize='md'marginBottom={"20px"}>Advertise with us</Link>
            <Link fontSize='md'marginBottom={"20px"}>Get the app</Link>
            </Box>

        </Box>
        <Box spacing={10} justifyContent={"flex-start"} width={{ base: '100%', md: 'auto' }}>
            <Heading as='h5' size='sm' marginBottom={"20px"}textAlign={"left"} > 
            For students
            </Heading>
            <Box display="flex" flexDirection={'column'} textAlign={"left"}>
            <Link fontSize='md' marginBottom={"20px"}>Flashcards</Link>
            <Link fontSize='md' marginBottom={"20px"}>Test</Link>
            <Link fontSize='md' marginBottom={"20px"}>Learn</Link>
            <Link fontSize='md'marginBottom={"20px"}>Solutions</Link>
            <Link fontSize='md'marginBottom={"20px"}>Q-Chat</Link>
            <Link fontSize='md'marginBottom={"20px"}> Spaced Repetition</Link>
            <Link fontSize='md'marginBottom={"20px"}> Modern Learning Lab</Link>
            <Link fontSize='md'marginBottom={"20px"}>Quizlet Plus</Link>
            </Box>

        </Box>
        <Box spacing={10} justifyContent={"flex-start"} width={{ base: '100%', md: 'auto' }}>
            <Heading as='h5' size='sm' marginBottom={"20px"}textAlign={"left"} > 
            For teachers
            </Heading>
            <Box display="flex" flexDirection={'column'} textAlign={"left"}>
            <Link fontSize='md' marginBottom={"20px"}>Live</Link>
            <Link fontSize='md' marginBottom={"20px"}>CheckPoint</Link>
            <Link fontSize='md' marginBottom={"20px"}>Blog</Link>
            <Link fontSize='md'marginBottom={"20px"}>Be the Change</Link>
            <Link fontSize='md'marginBottom={"20px"}>Quizlet Plus for teachers</Link>
            </Box>

        </Box>
        <Box spacing={10} justifyContent={"flex-start"} width={{ base: '100%', md: 'auto' }}>
            <Heading as='h5' size='sm' marginBottom={"20px"}textAlign={"left"} > 
            Resources
            </Heading>
            <Box display="flex" flexDirection={'column'} textAlign={"left"}>
            <Link  fontSize='md' marginBottom={"20px"}>Help center</Link>
            <Link fontSize='md' marginBottom={"20px"}>Sign up</Link>
            <Link fontSize='md' marginBottom={"20px"}>Honor code</Link>
            <Link fontSize='md'marginBottom={"20px"}>Community guidelines</Link>
            <Link fontSize='md'marginBottom={"20px"}>Privacy</Link>
            <Link fontSize='md'marginBottom={"20px"}>Terms</Link>
            <Link fontSize='md'marginBottom={"20px"}>Ad and Cookie Policy</Link>
            </Box>

        </Box>
        <Box spacing={10} justifyContent={"flex-start"} width={{ base: '100%', md: 'auto' }}> 
            <Heading as='h5' size='sm' marginBottom={"20px"}textAlign={"left"} > 
            Language
            </Heading>
            <Box display="flex" flexDirection={'column'} textAlign={"left"}>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Box>

        </Box>
    </Flex>
    <Box display='flex' justifyContent={"space-between"} bg={"gray.50"}p={"10px"}>
      <Box >
      <Flex>
      <IconButton
        as={chakra.a}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        icon={<FaInstagram />}
      />

      <IconButton
        as={chakra.a}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        icon={<FaFacebook />}
      />

      <IconButton
        as={chakra.a}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        icon={<FaTwitter />}
      />

      <IconButton
        as={chakra.a}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        icon={<FaTiktok />}
      />

      <IconButton
        as={chakra.a}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        icon={<FaYoutube />}
      />
    </Flex>
        <Heading as='h4' size='md'> © 2023 Quizlet, Inc.</Heading>
      </Box>
      <Box >
        <Image  src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=70,onerror=redirect,w=140/https://assets.quizlet.com/_next/static/media/coppa-seal.0efe00c1.png" alt=""
        />
      </Box>
    </Box>

    </>
  )
}






