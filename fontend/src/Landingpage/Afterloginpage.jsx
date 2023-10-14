import React from "react";

import Footer from "./footer";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import NavBar from "./Nav";
import { styled } from "styled-components";

export default function Afterloginpage() {
	return (
		<div>
			<NavBar />
			<HEADING>Recommended Expert Solutions</HEADING>
			<div style={{ backgroundColor: "", padding: "25px" }}>
				<DIV>
					<div className="booksContainer_">
						<div style={{ padding: "10px", width: "45%", display: "flex" }}>
							<Link to="/book">
								<img
									style={{ width: "80%" }}
									src="https://d2nchlq0f2u6vy.cloudfront.net/cache/c8/a5/c8a5311396364c06fa04595bbe2902f9.jpg"
									alt=""
								/>
							</Link>
						</div>
						<div style={{ padding: "10px", width: "45%" }}>
							<h2>Precalculus</h2>
							<p>2nd Edition - ISBN: 97</p>
							<p>Carter, Cuevas, Day, Malloy</p>
							<p>8,886 solutions</p>
						</div>
					</div>
					<div className="booksContainer_">
						<div style={{ padding: "10px", width: "45%", display: "flex" }}>
							<Link to="/book">
								<img
									style={{ width: "80%" }}
									src="	https://d2nchlq0f2u6vy.cloudfront.net/cache/2c/1e/2c1ebd8444499a8944f1c1c221b4201d.jpg"
									alt=""
								/>
							</Link>
						</div>
						<div style={{ padding: "10px", width: "45%" }}>
							<h2>Realidades</h2>
							<p>1st Edition - ISBN: 97</p>
							<p>Savvas Learning Co</p>
							<p>1,783 solutions</p>
						</div>
					</div>
					<div className="booksContainer_">
						<div style={{ padding: "10px", width: "45%", display: "flex" }}>
							<Link to="/book">
								<img
									style={{ width: "80%" }}
									src="https://d2nchlq0f2u6vy.cloudfront.net/cache/ed/fb/edfba486f9985ffe5b1b850ec44e2ea5.jpg"
									alt=""
								/>
							</Link>
						</div>
						<div style={{ padding: "10px", width: "45%" }}>
							<h2>Big Ideas Math Geometry</h2>
							<p>1nd Edition - ISBN: 97</p>
							<p>Boswell, Larson</p>
							<p>4,072 solutions</p>
						</div>
					</div>

					{/* Repeat more book elements here */}
				</DIV>
			</div>
			<Footer />
		</div>
	);
}
// import data from "./data.json"

{
	/* <div> */
}
// {data?.map((e)=>(
//   <div key={"e._id"}>{e.image} </div>
// ))}
// </div>

const DIV = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 1rem;
	width: 80%;
	border-radius: 10px;
	/* margin: auto; */
	.booksContainer_ {
		display: flex;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	}
	@media only screen and (max-width: 1000px) {
		.booksContainer_ {
			flex-direction: column;
			/* display: none; */
			align-items: center;
		}
		grid-template-columns: auto auto;
		justify-content: center;
	}
	@media only screen and (max-width: 550px) {
		justify-content: center;
		grid-template-columns: auto;
	}
`;

const HEADING = styled.h2`
	/* color: red; */
	font-size: 2rem;
	font-weight: bolder;
	width: 80%;
	@media only screen and (max-width: 1000px) {
		/* color: red; */
		display: flex;
		align-items: center;
		margin: auto;
	}
`;
