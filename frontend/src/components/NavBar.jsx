// NavBar.jsx
import "./styles/NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

import logo from "/assets/images/MoodTrack_icon.png";

function NavBar() {
	const [expanded, setExpanded] = useState(false);

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
						<Nav.Item>
							<Nav.Link as={Link} to="/login" className="mood-nav-btn mood-nav-login">
								Login
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								as={Link}
								to="/register"
								className="mood-nav-btn mood-nav-signup"
							>
								Signup
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBar;
