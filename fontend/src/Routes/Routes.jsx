import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Routes } from 'rea';
import styled from "@emotion/styled";
import SignIn from "../Pages/SignInPage";
import SignUp from "../Pages/SignUpPage";
import { PrivateRoute } from "../Components/PrivateRoute";
import AdminLogin from "../Pages/AdminLogin";
import Home1 from "../Landingpage/Home1";
import Afterloginpage from "../Landingpage/Afterloginpage";
import MainPageAdimn from "../Pages/MainPageAdimn";
import { SingleProduct } from "../Product/SingleProduct";
import { ExpereSolution } from "./../Product/ExpereSolution";
const MainRoutes = () => {
	return (
		<DIV>
			<Routes>
				<Route path="/" element={<Home1 />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/adminlogin" element={<AdminLogin />} />
				<Route
					path="/afterloginhome"
					element={
						<PrivateRoute>
							<Afterloginpage />
						</PrivateRoute>
					}
				/>
				<Route path="/mainAdmin" element={<MainPageAdimn />} />
				<Route
					path="/book/:id"
					element={
						<PrivateRoute>
							<SingleProduct />
						</PrivateRoute>
					}
				></Route>
				<Route path="/book" element={<ExpereSolution />}></Route>
			</Routes>
		</DIV>
	);
};
const DIV = styled.div`
	width: 100%;
`;
export default MainRoutes;
