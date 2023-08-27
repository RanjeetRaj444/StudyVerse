import React, { useState } from "react";
import "../Admin/Admin_Style/HomePage.css";
import MainRoutes from "../Routes/Routes";
import Header from "../Admin/components/Header";
import Sidebar from "../Admin/components/Sidebar";
const MainPageAdimn = () => {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};
	return (
		<div className="grid-container">
			<div className="sideContainer">
				<Sidebar
					openSidebarToggle={openSidebarToggle}
					OpenSidebar={OpenSidebar}
				/>
			</div>
			<div className="bodyContainer">
				{/* <div> */}
				<Header OpenSidebar={OpenSidebar} />
				{/* </div> */}
				<MainRoutes />
			</div>
		</div>
	);
};
export default MainPageAdimn;
