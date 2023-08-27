import React from "react";
import "../Admin_Style/Header.css";
import {
	// import Header from './Header';
	BsFillBellFill,
	BsFillEnvelopeFill,
	BsPersonCircle,
	BsSearch,
	BsJustify,
} from "react-icons/bs";
import DrawerResponsive from "./Drawer";

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
				<BsFillBellFill className="icon" />
				<BsFillEnvelopeFill className="icon" />
				<BsPersonCircle className="icon" />
			</div>
		</header>
	);
}

export default Header;
