//Register page
import React, { useState } from "react";

function Register() {

  // states
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")

  // handleLogin
  // may change to pass from parent component
  const handleLogin = () => {
    // TODO
  }

  return (
    <div>
      <h1>Register Page</h1>
      <div>
        <h2>Register Form</h2>
        <form onSubmit={handleLogin}>
          <div>
            Username
            <input 
              type="text" 
              id="username"
              value={username}
              name="Username"
              onChange={({target}) => setUsername(target.value)}
            />
          </div>
          <div>
            Email
            <input 
              type="text" 
              id="email"
              value={email}
              name="Email"
              onChange={({target}) => setEmail(target.value)}
            />
          </div>
          <div>
            Password
            <input 
              type="password" 
              id="password"
              value={password}
              name="Password"
              onChange={({target}) => setPassword(target.value)}
            />
          </div>
          <div>
            Verify Password
            <input 
              type="password" 
              id="verify-password"
              value={verifyPassword}
              name="Verify Password"
              onChange={({target}) => setVerifyPassword(target.value)}
            />
          </div>
          <button id="register-button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;