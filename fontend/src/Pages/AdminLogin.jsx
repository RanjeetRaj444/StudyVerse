import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
	Button,
	Box,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import logo from "../Assets/Logo3.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAdmin } from "../Redux/Admin_Auth_Redux/action";
import { useDispatch } from "react-redux";
const AdminLogin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSignIn = async () => {
		try {
			const adminData = { username, password };
			const response = await dispatch(loginAdmin(adminData));

			switch (response) {
				case "User logedin":
					toast.success("Signed in successfully");
					setTimeout(() => {
						navigate("/mainAdmin/*");
					}, 2000);
					break;
				case "Inccorect password":
					toast.error("Incorrect password");
					break;
				case "User does not exist, please register":
					toast.error("User does not exist, please register");
					break;
				default:
					toast.error("An error occurred");
			}
		} catch (error) {
			toast.error("Invalid credentials.");
		}
	};

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<ToastContainer />
			<Flex minH={"100vh"} justify="center" align="center" bg="blue.100">
				<Box maxW={"500px"} w={{ base: "90%", sm: "80%", md: "50%" }} p={4}>
					<Flex justify="center" mb={8}>
						<Image
							alt={"Sign In Image"}
							objectFit={"contain"}
							src={logo}
							h="100px"
						/>
					</Flex>
					<Box bg="white" rounded="lg" boxShadow="lg" p={8}>
						<Stack spacing={4}>
							<Heading fontSize={{ base: "xl", md: "2xl" }} textAlign="center">
								Admin Sign In
							</Heading>
							<FormControl id="email" isRequired>
								<FormLabel>Username</FormLabel>
								<Input
									type="text"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
									size="md"
								/>
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										type={showPassword ? "text" : "password"}
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										size="md"
									/>
									<InputRightElement width="3rem">
										{showPassword ? (
											<ViewOffIcon onClick={handleTogglePassword} />
										) : (
											<ViewIcon onClick={handleTogglePassword} />
										)}
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Button
								colorScheme={"blue"}
								variant={"solid"}
								onClick={handleSignIn}
								size="md"
							>
								Sign in
							</Button>
						</Stack>
					</Box>
				</Box>
			</Flex>
		</>
	);
};

export default AdminLogin;
