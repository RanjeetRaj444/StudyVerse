import logo from "./logo.svg";
import "./App.css";
import { ExpereSolution } from './Product/ExpereSolution';
import SignIn from './Pages/SignInPage';
import SignUp from './Pages/SignUpPage';
import { SingleProduct } from './Product/SingleProduct';
import { AddIcon } from "@chakra-ui/icons";
import AdminLogin from "./Pages/AdminLogin";
import MainRoutes from "./Routes/Routes";
// import Navbar from "./Admin/Pages/Navbar";
import MainPageAdimn from "./Pages/MainPageAdimn";
import AdminRoutes from "./Routes/AdminRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
// import MainRoutes from "./Routes/Routes";
// import Routes from './Routes/Routes';
function App() {
  
  return (
    <div>
    {/* <ExpereSolution/> */}
    {/* hello */}
    <MainRoutes/>
    </div>
  );

};

export default App;
