//Register page
import "../components/styles/register.css";
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

function Register() {
	// states
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

	// handleRegister
	// may change to pass from parent component
	const handleRegister = () => {
		// TODO
	};

	return (
		<div className="mood-register">
			<div className="register-card">
				<Form>
					<h3>Register Form</h3>
					<Form.Group className="mt-4 mb-4" controlId="registerForm.ControlInput1">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your username"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
						/>
						{/* Error message for username */}
						<Form.Text className="text-error">This field cannot be empty.</Form.Text>
					</Form.Group>

					<Form.Group className="mb-4" controlId="registerForm.ControlInput2">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter your email"
							value={email}
							onChange={({ target }) => setEmail(target.value)}
						/>
            {/* Error message for username */}
						<Form.Text className="text-error"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-4" controlId="registerForm.ControlInput3">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
            {/* Error message for username */}
						<Form.Text className="text-error"></Form.Text>
					</Form.Group>

					<Form.Group className="mb-4" controlId="registerForm.ControlInput4">
						<Form.Label>Verify Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm password"
							value={verifyPassword}
							onChange={({ target }) => setVerifyPassword(target.value)}
						/>
            {/* Error message for username */}
						<Form.Text className="text-error"></Form.Text>
					</Form.Group>
          
					<div className="d-grid mt-5">
						<Button type="submit" className="register-btn">
							Register
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Register;
