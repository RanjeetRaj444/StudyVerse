import {
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	Image,
} from "@chakra-ui/react";
import "../Admin_Style/Sidebar.css";
import React from "react";
import { BsJustify } from "react-icons/bs";
import logo from "../assests/Logo3.png";
import { FaUsersCog, FaUserAlt } from "react-icons/fa";
import { GiBookshelf, GiHomeGarage } from "react-icons/gi";
import { Link } from "react-router-dom";

function DrawerResponsive() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
				<BsJustify className="icon" />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody>
						<div className="responsive">
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
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default DrawerResponsive;
