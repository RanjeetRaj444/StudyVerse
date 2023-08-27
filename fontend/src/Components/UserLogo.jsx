import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Icon,
} from "@chakra-ui/react";
import {
  FiUser,
  FiSettings,
  FiShield,
  FiLifeBuoy,
  FiArrowUpCircle,
} from "react-icons/fi";
import { logoutUser } from "../Redux/User_Redux/action";
import { Link } from "react-router-dom";
import SignIn from "../Pages/SignInPage";
import SignUp from "../Pages/SignUpPage";

const UserLogo = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const username = useSelector((state) => state.user.username);
  const email = useSelector((state) => state.user.email);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  console.log(isAuth, username, email);
  return (
    <>
      <Menu>
        <MenuButton>
          {isAuth ? (
            <Avatar size="md" name={username} src="/path-to-user-avatar.png" />
          ) : (
            <Avatar size="md" />
          )}
        </MenuButton>
        <MenuList>
          {isAuth ? (
            <>
              <MenuItem>{`Welcome, ${username}`}</MenuItem>
              <MenuItem>{email}</MenuItem>
              <Box h="1px" bg="gray.300" my={2} />
              <MenuItem>
                <Icon as={FiUser} mr={2} />
                Profile
              </MenuItem>
              <MenuItem>
                <Icon as={FiSettings} mr={2} />
                Settings
              </MenuItem>
              <Box h="1px" bg="gray.300" my={2} />
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
              <Box h="1px" bg="gray.300" my={2} />
              <MenuItem>
                <Icon as={FiShield} mr={2} />
                Privacy Policy
              </MenuItem>
              <MenuItem>
                <Icon as={FiLifeBuoy} mr={2} />
                Help & Feedback
              </MenuItem>
              <MenuItem>
                <Icon as={FiArrowUpCircle} mr={2} />
                Upgrade
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem as={Link} to="/signin">
                Sign in
              </MenuItem>
              <MenuItem as={Link} to="/signup">
                Sign up
              </MenuItem>
            </>
          )}
        </MenuList>
      </Menu>

      {showSignIn && <SignIn setShowSignIn={setShowSignIn} />}
      {showSignUp && <SignUp setShowSignUp={setShowSignUp} />}
    </>
  );
};

export default UserLogo;