import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function NavBar() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar bg="dark" variant="dark" expand="lg" className="p-2">
			<div className="container">
				<Navbar.Brand
					as={Link}
					to="/"
					className="d-flex align-items-center mb-0 mb-lg-0 text-white text-decoration-none"
				>
					<h2>Logo</h2>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="navbar-nav"
					onClick={() => setExpanded(!expanded)}
				/>

				<Navbar.Collapse id="navbar-nav" className="justify-content-end">
					<Nav className="mr-auto">
						<Nav.Link as={Link} to="/" className="nav-link text-white">
							Home
						</Nav.Link>

						<Nav.Link as={Link} to="/dashboard" className="nav-link text-white">
							Dashboard
						</Nav.Link>

						<Nav.Link as={Link} to="/log" className="nav-link text-white">
							Log
						</Nav.Link>

						<Nav.Link as={Link} to="/resources" className="nav-link text-white">
							Resources
						</Nav.Link>

						<Nav.Link as={Link} to="/about" className="nav-link text-white">
							About
						</Nav.Link>
					</Nav>

					<Button as={Link} to="/register" variant="outline-light" className="ms-3">
						Signup
					</Button>
          <Button as={Link} to="/login" variant="outline-light" className="ms-2">
						Login
					</Button>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default NavBar;
