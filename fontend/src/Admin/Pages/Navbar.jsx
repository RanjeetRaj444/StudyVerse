import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Button, Image, Text } from "@chakra-ui/react";
import logo from "../assests/Logo2.png";

const Navbar = () => {
	return (
		<DIV id="Navbar">
			<div className="logo">
				<Image src={logo} alt="err" />
			</div>
			<div className="LinksBody">
				<Button className="link">
					
				</Button>
				<Button className="link">
					
				</Button>
				<Button className="link">
					
				</Button>
				<Button className="link">
					
				</Button>
			</div>
		</DIV>
	);
};

const DIV = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	border: 0.1rem solid;
	padding: 1rem;
	width: 13%;
    background-color: #E6FFFF;
    height: 100vh;
	.link {
		display: flex;
		gap: 1rem;
	}
	.LinksBody {
		display: flex;
        height: 100vh;
		flex-direction: column;
		gap: 2rem;
		/* border: 0.1rem solid; */
		padding: 1rem;
	}
`;

export default Navbar;
