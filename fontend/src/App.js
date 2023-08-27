import logo from "./logo.svg";
import "./App.css";
// import { ExpereSolution } from "./Parmeshwar/ExpereSolution";
import SignIn from './Pages/SignInPage';
import SignUp from './Pages/SignUpPage';
import { SingleProduct } from './Product/SingleProduct';
import { AddIcon } from "@chakra-ui/icons";
import AdminLogin from "./Pages/AdminLogin";
import MainRoutes from "./Routes/Routes";
// import Navbar from "./Admin/Pages/Navbar";
import MainPageAdimn from "./Pages/MainPageAdimn";
function App() {
  return (
    <div>
    {/* <ExpereSolution/> */}
    {/* hello */}

    {/* <MainPageAdimn/> */}
    <MainRoutes/>

 
    </div>
  );

};

export default App;
