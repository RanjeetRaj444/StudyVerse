import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Text, Image } from "@chakra-ui/react";
import { Exercise } from "../Components/Exercise";
import axios from "axios";
import { useState } from "react";
import NavBar from "../Landingpage/Nav";
import Footer from "../Landingpage/footer";

export const SingleProduct = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [data, setData] = useState({});

	const id = "64eaf1fad42fd89982374099";

	const getSingleData = () => {
		axios
			.get(`https://studyverse-drgj.onrender.com/subjects/singleBook/${id}`)
			.then((res) => {
				console.log(res);
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getSingleData();
	}, []);

	console.log(data, "data");

	// const id = searchParams.get('id')
	return (
		<div style={{ backgroundColor: "#dbdfff99" }}>
			<NavBar />
			<DIV style={{ width: "80%", margin: "auto", padding: "1rem" }}>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						backgroundColor: "#dbdfff99",
					}}
				>
					<div style={{ width: "10%" }}>
						<Image src={data.image} alt="Dan Abramov" />
					</div>

					<div style={{ width: "30%", marginLeft: "10px" }}>
						<Text fontSize={{ base: "16px" }} style={{ fontWeight: "bold" }}>
							{data.title}
						</Text>
						<Text
							fontSize={{ base: "13px" }}
							style={{ fontWeight: "500", color: "#928b8b" }}
						>
							Author: {data.author}
						</Text>

						<Text
							fontSize={{ base: "13px" }}
							style={{ fontWeight: "500", color: "#928b8b" }}
						>
							{data.description}
						</Text>
					</div>
				</div>

				<div style={{ marginTop: "50px" }}>
					<Text
						fontSize={{ base: "16px", md: "24px", lg: "24px" }}
						fontWeight={"bold"}
						color={"#2e3856"}
					>
						Textbook solutions
					</Text>

					<Exercise
						exercise={data.exercise}
						chapter={data.chapter}
						solution={data.solution}
					/>
				</div>
			</DIV>
			<Footer />
		</div>
	);
};

const DIV = styled.div`
	background-color: #dbdfff99;
`;
