import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSmile,
	faBookmark,
	faPenToSquare,	
} from "@fortawesome/free-regular-svg-icons";
import {
	faGear
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";
import { NavItem } from "react-bootstrap";

function Sidebar() {
	const { user } = useContext(AuthContext);
	const location = useLocation();

	return (
		<div className="sidebar">
			<div className="sidebar-user">
				<Image
					src="https://img.freepik.com/premium-photo/cute-teddy-cute-teddy-bear-isolated-white-background_176100-305.jpg?w=500"
					roundedCircle
					className="sidebar-img"
				/>
				{user && <span className="sidebar-username">{user.username}</span>}
			</div>

			<Nav className="flex-column mb-auto nav-fill">
				<NavItem className="sidebar-item">
					<Nav.Link
						as={Link}
						to="/dashboard/mood"
						className={
							location.pathname === "/dashboard/mood" ? "nav-link active" : "nav-link"
						}
					>
						<FontAwesomeIcon icon={faSmile} />
						Mood / Activities
					</Nav.Link>
				</NavItem>
				<NavItem className="sidebar-item">
					<Nav.Link
						as={Link}
						to="/dashboard/journal"
						className={
							location.pathname === "/dashboard/journal"
								? "nav-link active"
								: "nav-link"
						}
					>
						<FontAwesomeIcon icon={faBookmark} />
						Journal
					</Nav.Link>
				</NavItem>
				<NavItem className="sidebar-item">
					<Nav.Link
						as={Link}
						to="/dashboard/logs"
						className={
							location.pathname === "/dashboard/logs" ? "nav-link active" : "nav-link"
						}
					>
						<FontAwesomeIcon icon={faPenToSquare} />
						Logs
					</Nav.Link>
				</NavItem>
				<hr></hr>
				<NavItem className="sidebar-item">
					<Nav.Link
						as={Link}
						to="/dashboard/logs"
						className={
							location.pathname === "/dashboard/setting" ? "nav-link active" : "nav-link"
						}
					>
						<FontAwesomeIcon icon={faGear} />
						Setting
					</Nav.Link>
				</NavItem>
			</Nav>
		</div>
	);
}

export default Sidebar;
