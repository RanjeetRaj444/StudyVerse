import { Box, Button, Flex, HStack, Heading, IconButton, Image, Input, InputGroup,  Menu, MenuButton, MenuDivider, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Spacer, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SearchIcon, Search2Icon } from '@chakra-ui/icons';
// import image from './Logo3.png';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineBook } from "react-icons/ai";
import { GiBookCover, GiPencilBrush, GiTestTubes} from "react-icons/gi";
import UserLogo from "../Components/UserLogo";
import Logo from "../Assets/Logo3.png";
export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={999} px={0} py={0}>
    <Flex alignItems="center" py={4} px={8} bg="white">
      <Box>
        <img
          src={Logo}
          alt="Website Logo"
          style={{ width: "100px", height: "auto", marginRight: "10px" }}
        />
      </Box>
      <Box>
        <HStack spacing={8}>
          <Box as={Link} to="/" display={{ base: "none", md: "block" }}>
            Home
          </Box>
          <Menu>
            <MenuButton
              as={Box}
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.100" }}
            >
              Subjects
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/subjects/exams">
                <GiBookCover color="#FF5722" /> Exams
              </MenuItem>
              <MenuItem as={Link} to="/subjects/arts-and-humanities">
                <GiPencilBrush color="#4CAF50" /> Arts and Humanities
              </MenuItem>
              <MenuItem as={Link} to="/subjects/languages">
                <AiOutlineBook color="#9C27B0" /> Languages
              </MenuItem>
              <MenuItem as={Link} to="/subjects/math">
                <AiOutlineBook color="#2196F3" /> Math
              </MenuItem>
              <MenuItem as={Link} to="/subjects/science">
                <GiTestTubes color="#FFC107" /> Science
              </MenuItem>
              <MenuItem as={Link} to="/subjects/social-science">
                <AiOutlineBook color="#E91E63" /> Social Science
              </MenuItem>
              <MenuItem as={Link} to="/subjects/other">
                <AiOutlineBook color="#FF9800" /> Other
              </MenuItem>
            </MenuList>
          </Menu>
          <Box
            as={Link}
            to="/expert-solutions"
            display={{ base: "none", md: "block" }}
          >
            Expert Solutions
          </Box>
        </HStack>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }} width="40%">
        <Input placeholder="Search study set, textbooks, questions" />
      </Box>
      <Spacer />
      <Box
        display={{ base: "none", md: "block" }}
        width={{ base: "30%", md: "auto" }}
      >
        <HStack spacing={8} justify="space-between" fontSize="xl">
          <Box as={Link} to="/signin">
            Admin
          </Box>
          <Box>
            <UserLogo />
          </Box>
          <Box>
            <Button as={Link} to="/login" variant="link">
              Login
            </Button>
          </Box>
          <Box>
            <Button as={Link} to="/signup" colorScheme="yellow">
              Signup
            </Button>
          </Box>
        </HStack>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={
            isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />
          }
          variant="ghost"
          onClick={onToggle}
        />
      </Box>
    </Flex>
    {isOpen && (
      <Box
        bg="gray.100"
        position={{
          base: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
        }}
        overflowY="auto"
      >
        <Flex height="100%" alignItems="center" flexDirection="column">
          <HStack spacing={4} flexWrap="wrap" fontSize="xl">
            <Box>
              Home
            </Box>
            <Box >
              Expert Solutions
            </Box>
            <Box>
              <UserLogo/>
            </Box>
          </HStack>
          <Box mt={4} width="80%">
            <Input placeholder="Search study set, textbooks, questions" />
          </Box>
        </Flex>
      </Box>
    )}
  </Box>
  );
}


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// import {
//   Box,
//   Flex,
//   Spacer,
//   HStack,
//   useDisclosure,
//   IconButton,
//   Input,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Button,
// } from "@chakra-ui/react";


// const Navbar = () => {
 
//   return (
  
//   );
// };

// export default Navbar;




