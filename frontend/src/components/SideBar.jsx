import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSmile,
	faBookmark,
	faPenToSquare
} from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";
import { NavItem, Offcanvas } from "react-bootstrap";

import userService from '../services/user'

function Sidebar({ show, setShow }) {
	const { user } = useContext(AuthContext);
	const location = useLocation();

	const handleClose = () => setShow(false);

	return (
		<div className="sidebar-container">
			{/* Offcanvas menu for small screens */}
			<Offcanvas show={show} onHide={handleClose} placement="start">
				<Offcanvas.Header closeButton></Offcanvas.Header>
				<Offcanvas.Body>
					<div className="offcanvas-sidebar">
						<div className="sidebar-user">
							<Image
								src={user.profileImage ? userService.getProfileImageUrl(user.profileImage) : "../assets/images/user-photo.jpg"}
								roundedCircle
								className="sidebar-img"
							/>
							{user && <div className="sidebar-username">{user.username}</div>}
						</div>
						<Nav className="flex-column mb-auto nav-fill">
							<NavItem className="sidebar-item">
								<Nav.Link
									as={Link}
									to="/dashboard/mood"
									className={
										location.pathname === "/dashboard/mood"
											? "nav-link active"
											: "nav-link"
									}
								>
									<FontAwesomeIcon icon={faSmile} />
									Mood / Activities
								</Nav.Link>
							</NavItem>

							<NavItem className="sidebar-item">
								<Nav.Link
									as={Link}
									to="/dashboard/Journal"
									className={
										location.pathname === "/dashboard/Journal"
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
										location.pathname === "/dashboard/logs"
											? "nav-link active"
											: "nav-link"
									}
								>
									<FontAwesomeIcon icon={faPenToSquare} />
									Logs
								</Nav.Link>
							</NavItem>

							<NavItem className="sidebar-item">
								<Nav.Link
									as={Link}
									to="/dashboard/setting"
									className={
										location.pathname === "/dashboard/setting"
											? "nav-link active"
											: "nav-link"
									}
								>
									<FontAwesomeIcon icon={faGear} />
									Setting
								</Nav.Link>
							</NavItem>
						</Nav>
					</div>
				</Offcanvas.Body>
			</Offcanvas>

			{/* Sidebar for large screens */}
			<div className="sidebar">
				<div className="sidebar-user">
					<Image
						src={user.profileImage ? userService.getProfileImageUrl(user.profileImage) : "../assets/images/user-photo.jpg"}
						roundedCircle
						className="sidebar-img"
					/>
					{user && <div className="sidebar-username">{user.username}</div>}
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
					<hr />
					<NavItem className="sidebar-item">
						<Nav.Link
							as={Link}
							to="/dashboard/setting"
							className={
								location.pathname === "/dashboard/setting"
									? "nav-link active"
									: "nav-link"
							}
						>
							<FontAwesomeIcon icon={faGear} />
							Setting
						</Nav.Link>
					</NavItem>
				</Nav>
			</div>
		</div>
	);
}

export default Sidebar;
