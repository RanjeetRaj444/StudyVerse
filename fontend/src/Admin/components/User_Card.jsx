import { Button, Image, Text } from "@chakra-ui/react";
import "../Admin_Style/User_Card.css";
import React from "react";
import profile from "../assests/profile.png";
// import User_Card from "./User_Card";
const UserCard = ({ ele }) => {
	return (
		<div className="userCard">
			<div className="imageContainer">
				<Image
					// width="80%"
					borderRadius={"1rem"}
					// height={"17rem"}
					src={profile}
					alt="err"
				/>
			</div>
			<div className="userDetail">
				<Text>Username:- {ele.username}</Text>
				<Text>Email:- {ele.email}</Text>
				<Text>Password:- {ele.password}</Text>
				<Button>Block</Button>
			</div>
		</div>
	);
};

export default UserCard;
