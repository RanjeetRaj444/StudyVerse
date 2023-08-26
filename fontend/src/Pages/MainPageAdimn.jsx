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
			<Header OpenSidebar={OpenSidebar} />
			<Sidebar
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			<MainRoutes />
		</div>
	);
};
export default MainPageAdimn;
