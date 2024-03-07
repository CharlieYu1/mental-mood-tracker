//Login page
import "../components/styles/login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Login() {
	// states
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleRememberMeChange = () => {
			setRememberMe(!rememberMe);
	};

	// handleLogin
	// may change to pass from parent component
	const handleLogin = () => {
		// TODO
	};

	return (
		<div className="mood-login">
			<div className="login-card">
				<Form>
					<h3>Welcome</h3>
					<Form.Group className="mt-4 mb-4" controlId="loginForm.ControlInput1">
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

					<Form.Group className="mb-4" controlId="loginForm.ControlInput2">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter your password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						{/* Error message for password */}
						<Form.Text className="text-error"></Form.Text>
					</Form.Group>

					{/* Additional */}
					<Form.Group className="form-text mb-3" controlId="loginFormCheckbox">
						<Form.Check
							type="checkbox"
							label="Remember Me"
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>
					</Form.Group>
					
					<Form.Text>
						<Link to="/resetPwd" className="text-forgot">
							Forgot password?
						</Link>
					</Form.Text>
					<br></br>
					<Form.Text>
						Don't have an account?{" "}
						<Link to="/register" className="text-link">
							Sign Up
						</Link>
					</Form.Text>

					<div className="d-grid mt-5">
						<Button type="submit" className="login-btn">
							Login
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}

export default Login;
