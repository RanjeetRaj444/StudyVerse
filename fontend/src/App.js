import logo from "./logo.svg";
import "./App.css";
import SignIn from "./Pages/SignInPage";
import SignUp from "./Pages/SignUpPage";
import { SingleProduct } from "./Product/SingleProduct";
import { AddIcon } from "@chakra-ui/icons";
import AdminLogin from "./Pages/AdminLogin";
import MainRoutes from "./Routes/Routes";
import MainPageAdimn from "./Pages/MainPageAdimn";
import { useSelector } from "react-redux";
function App() {
	const isAuth = useSelector((state) => state.user.isAuth);
	return (
		<div>
		<MainRoutes />

		</div>
	);
}

export default App;
