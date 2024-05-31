import "./styles/NavBar.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from "/assets/images/MoodTrack_icon.png";

import { AuthContext } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
	const [expanded, setExpanded] = useState(false);

	const { user, setUser, token, setToken } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleLogout = async (e) => {
		e.preventDefault();
		setToken(null);
		setUser(null);
		localStorage.removeItem("token");
		navigate("/");
	};

	//Close menu when item is clicked
	const handleNavItemClick = () => {
		setExpanded(false);
	};

	return (
		<Navbar
			expand="lg"
			className="mood-nav"
			expanded={expanded}
			onToggle={setExpanded}
		>
			<div className="container">
				<Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
					<img src={logo} className="img-fluid" alt="Logo" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="navbar-nav" />

				<Navbar.Collapse id="navbar-nav" className="menu-body">
					<Nav className="me-auto">
						<Nav.Link
							as={Link}
							to="/"
							className="mood-nav-link"
							onClick={handleNavItemClick}
						>
							Home
						</Nav.Link>

						<Nav.Link
							as={Link}
							to="/resources"
							className="mood-nav-link"
							onClick={handleNavItemClick}
						>
							Resources
						</Nav.Link>

						<Nav.Link
							as={Link}
							to="/about"
							className="mood-nav-link"
							onClick={handleNavItemClick}
						>
							About
						</Nav.Link>
						<NavDropdown
							title="Dashboard"
							id="nav-dropdown"
							className="mood-nav-link"
						>
							<NavDropdown.Item
								as={Link}
								to="/dashboard/mood"
								className="mood-nav-dropdown"
								onClick={handleNavItemClick}
							>
								Mood / Activities
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to="/dashboard/journal"
								className="mood-nav-dropdown"
								onClick={handleNavItemClick}
							>
								Journal
							</NavDropdown.Item>
							<NavDropdown.Item
								as={Link}
								to="/dashboard/logs"
								className="mood-nav-dropdown"
								onClick={handleNavItemClick}
							>
								Logs
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item
								as={Link}
								to="/dashboard/setting"
								className="mood-nav-dropdown"
								onClick={handleNavItemClick}
							>
								Setting
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					<Nav className="justify-content-end">
						{!user && (
							<Nav.Item>
								<Nav.Link
									as={Link}
									to="/login"
									className="mood-nav-btn mood-nav-login"
									onClick={handleNavItemClick}
								>
									Login
								</Nav.Link>
							</Nav.Item>
						)}
						{!user && (
							<Nav.Item>
								<Nav.Link
									as={Link}
									to="/register"
									className="mood-nav-btn mood-nav-signup"
									onClick={handleNavItemClick}
								>
									Signup
								</Nav.Link>
							</Nav.Item>
						)}
						{user && (
							<Nav.Item onClick={handleLogout}>
								<Nav.Link
									as={Link}
									to=""
									className="mood-nav-btn mood-nav-logout"
									onClick={handleNavItemClick}
								>
									Logout
								</Nav.Link>
							</Nav.Item>
						)}
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBar;
