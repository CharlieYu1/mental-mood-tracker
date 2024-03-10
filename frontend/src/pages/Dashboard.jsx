//Dashboard page
import React, { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      {user ? <p>Welcome {user.username}!</p> : <p>Login to use the dashboard.</p>}
    </div>
  );
}

export default Dashboard;