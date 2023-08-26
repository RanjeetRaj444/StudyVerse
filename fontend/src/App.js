import logo from "./logo.svg";
import "./App.css";
// import { ExpereSolution } from "./Parmeshwar/ExpereSolution";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";
import MainRoutes from "./Routes/Routes";
import UserLogo from "./Components/UserLogo";
// import Navbar from "./Admin/Pages/Navbar";
// import MainPageAdimn from "./Pages/MainPageAdimn";
// import MainRoutes from "./Routes/Routes";
// import Routes from './Routes/Routes';

function App() {
  return (
    <div>
    {/* <ExpereSolution/> */}
    <MainRoutes/>
    <UserLogo/>
    </div>
  );

};


export default App;