import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../components/User_Card";
import "../Admin_Style/User.css";

const Users = () => {
	const [userdata, setUserData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8080/user/getUsers")
			.then((data) => {
				setUserData(data.data.data);
			})
			.catch((error) => {
				console.log({ msg: error.message });
			});
	}, []);

	return (
		<div className="userCardContainer">
			{userdata && userdata.map((ele, ind) => <UserCard key={ind} ele={ele} />)}
		</div>
	);
};

export default Users;
