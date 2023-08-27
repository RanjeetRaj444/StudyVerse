import React from "react";
import "../Admin_Style/Header.css";
import {
	BsFillBellFill,
	BsFillEnvelopeFill,
	BsPersonCircle,
	BsSearch,
} from "react-icons/bs";
import DrawerResponsive from "./Drawer";
import InputAdd from "./Input_Add";
function Header({ OpenSidebar }) {
	return (
		<header className="header">
			<div className="menu-icon">
				<DrawerResponsive/>
				{/* <BsJustify className="icon" onClick={OpenSidebar} /> */}
			</div>
			<div className="header-left">
				<BsSearch className="icon" />
			</div>
			<div className="header_right">
				<InputAdd/>
				<BsFillBellFill className="icon" />
				<BsFillEnvelopeFill className="icon" />
				<BsPersonCircle className="icon" />
			</div>
		</header>
	);
}

export default Header;