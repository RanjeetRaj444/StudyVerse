import React, { useState } from "react";
import "../Admin/Admin_Style/HomePage.css";
import Header from "../Admin/components/Header";
import Sidebar from "../Admin/components/Sidebar";
import AdminRoutes from "../Routes/AdminRoutes";
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
				<Header OpenSidebar={OpenSidebar} />
				<AdminRoutes />
			</div>
		</div>
	);
};
export default MainPageAdimn;
