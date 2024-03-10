// NavBar.jsx
import "./styles/NavBar.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import logo from "/assets/images/MoodTrack_icon.png";

import { AuthContext } from "../components/AuthContext";
import { useNavigate } from 'react-router-dom'

function NavBar() {
	const [expanded, setExpanded] = useState(false);

	const [errorMessage, setErrorMessage] = useState("");

	const { user, setUser, setToken } = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = async (e) => {
		e.preventDefault();
		setToken(null)
		setUser(null)
		localStorage.removeItem('token')
		navigate("/")
	}

	return (
		<Navbar expand="lg" className="mood-nav">
			<div className="container">
				<Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
					<img src={logo} className="img-fluid" alt="Logo" />
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="navbar-nav"
					onClick={() => setExpanded(!expanded)}
				/>

				<Navbar.Collapse>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/" className="mood-nav-link">
							Home
						</Nav.Link>

						<Nav.Link as={Link} to="/dashboard" className="mood-nav-link">
							Dashboard
						</Nav.Link>

						<Nav.Link as={Link} to="/log" className="mood-nav-link">
							Log
						</Nav.Link>

						<Nav.Link as={Link} to="/resources" className="mood-nav-link">
							Resources
						</Nav.Link>

						<Nav.Link as={Link} to="/about" className="mood-nav-link">
							About
						</Nav.Link>
					</Nav>

					<Nav className="justify-content-end">
						{!user && <Nav.Item>
							<Nav.Link as={Link} to="/login" className="mood-nav-btn mood-nav-login">
								Login
							</Nav.Link>
						</Nav.Item>}
						{!user && <Nav.Item>
							<Nav.Link
								as={Link}
								to="/register"
								className="mood-nav-btn mood-nav-signup"
							>
								Signup
							</Nav.Link>
						</Nav.Item>}
						{user && <Nav.Item onClick={handleLogout}>
							<Nav.Link
								as={Link}
								to=""
								className="mood-nav-btn mood-nav-logout"
							>
								Logout
							</Nav.Link>
						</Nav.Item>}
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBar;
