import React from 'react'; // Added React import
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  InputGroup,
  Input,
} from '@chakra-ui/react';
import UserLogo from "../Components/UserLogo";
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'; // Changed Search2Icon to SearchIcon
import { Link } from 'react-router-dom';

import image from './Logo3.png';

const Links = [
  { label: 'Home', href: '/' },
  { label: 'Subject', href: '/login' },
  { label: 'Expert solutions', href: '/register' },
];

const NavLink = ({ label, href }) => { // Destructure props
  return (
    <Link
      to={href} // Use the 'to' prop for Link component
      as={Box} // Use Box as the wrapper component
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('', ''),
      }}
    >
      {label}
    </Link>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('', '')} px={4} position="sticky"
      top="0"
      backgroundColor="white"
      transition="box-shadow 0.3s"
      zIndex="1000"
      boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image src={image} alt="" w="150px" />
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.label} {...link} /> // Pass the link object as props
              ))}
            </HStack>
          </HStack>
          <Box>
          <InputGroup>
            <Input aria-label="Search database" placeholder="Study sets, textbooks, questions" w="300px" />
            <Box m="auto">
              <SearchIcon w="25" h="30" /> {/* Changed to SearchIcon */}
            </Box>
          </InputGroup>
          </Box>
          <Box>
            <UserLogo/>
          </Box>
          <Box gap="10px" display={'flex'} flexDirection={'row'}>
            <Button bg="none" border="none">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button bg="#ffdc62">
              <Link to="/register">Sign Up</Link>
            </Button>
          </Box>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} {...link} /> // Pass the link object as props
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}


    //   <Flex alignItems={'center'}>
    //         <Button
    //           variant={'solid'}
    //           colorScheme={'teal'}
    //           size={'sm'}
    //           mr={4}
    //           leftIcon={<AddIcon />}>
    //           Action
    //         </Button>
    //         <Menu>
    //           <MenuButton
    //             as={Button}
    //             rounded={'full'}
    //             variant={'link'}
    //             cursor={'pointer'}
    //             minW={0}>
    //             <Avatar
    //               size={'sm'}
    //               src={
    //                 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
    //               }
    //             />
    //           </MenuButton>
    //           <MenuList>
    //             <MenuItem>sign in</MenuItem>
    //             <MenuItem>Link 2</MenuItem>
    //             <MenuDivider />
    //             <MenuItem>Link 3</MenuItem>
    //           </MenuList>
    //         </Menu>
    //       </Flex> 