import React from "react";
import "../Admin_Style/Sidebar.css";
import { FaUsersCog, FaUserAlt } from "react-icons/fa";
import { GiBookshelf, GiHomeGarage } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import logo from "../assests/Logo3.png";
function Sidebar({ openSidebarToggle, OpenSidebar }) {
	return (
		<div
			id="sidebar"
			// className={openSidebarToggle ? "sidebar-responsive" : ""}
		>
			<div className="sidebar-title">
				<div className="sidebar-brand">
					<Image src={logo} alt="err" />
				</div>
			</div>

			<ul className="sidebar-list">
				<li className="sidebar-list-item">
					{<GiHomeGarage />}
					<Link to={"/admin"}>Home</Link>
				</li>
				<li className="sidebar-list-item">
					{<GiBookshelf />}
					<Link to={"/admin/books"}>Books</Link>
				</li>
				<li className="sidebar-list-item">
					{<FaUsersCog />}
					<Link to={"/admin/users"}>Users</Link>
				</li>
				<li className="sidebar-list-item">
					{<FaUserAlt />}
					<Link to={"/admin/profile"}>Profile</Link>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;
