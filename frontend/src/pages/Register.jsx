//Register page
import "../components/styles/register.css";
import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";

import { signupService } from '../services/signup'
import { AuthContext } from "../components/AuthContext";
import { useNavigate } from 'react-router-dom'

function Register() {
	// states
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyPassword, setVerifyPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const { setToken } = useContext(AuthContext)
  const navigate = useNavigate()

	// handler for Registration
	const handleSubmit = async (e) => {
		// TODO
    e.preventDefault()
    try {
      const response = await signupService.signup({
        username,
        email,
        password,
        verifyPassword
      })
      setToken(response.token)
      localStorage.setItem('token', response.token)
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error.response.data.message)
      setToken(null)
      localStorage.removeItem('token')

      // error handling and error message
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message)
      } else {
        setErrorMessage("An unexpected error occurred. Please try again")
      }
    }
	};

	return (
		<div className="mood-register">
			<div className="register-card">
				<Form onSubmit={handleSubmit}>
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
