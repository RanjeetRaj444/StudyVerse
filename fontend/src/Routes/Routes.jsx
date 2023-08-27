import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Routes } from 'rea';
import HomePage from "./../Admin/Pages/HomePage";
import BooksPage from "./../Admin/Pages/BooksPage";
import Users from "./../Admin/Pages/Users";
import styled from "@emotion/styled";

import SignIn from "../Pages/SignInPage";
import SignUp from "../Pages/SignUpPage";

import { PrivateRoute } from "../Components/PrivateRoute";
const MainRoutes = () => {
	return (
		<DIV>
			<Routes>
				<Route path="/admin" element={<HomePage />} />
				<Route path="/admin/books" element={<BooksPage />} />
				<Route path="/admin/users" element={<Users />} />
				<Route path="/admin/profile" element={<Users />} />
				<Route path="/signup" element={<PrivateRoute><SignUp /></PrivateRoute>} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</DIV>
	);
};
const DIV = styled.div`
	width: 100%;
`;
export default MainRoutes;
