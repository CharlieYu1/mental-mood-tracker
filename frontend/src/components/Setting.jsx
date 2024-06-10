//Journal.jsx
import React, { useContext } from "react";

import { AuthContext } from "../components/AuthContext";

function Setting() {
    
    const { token, user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <p>Loading user settings...</p>;
    }
    
    if (!user) {
        return <p>Please login to see user settings.</p>
    }
    
    return (
        
        
        <div className="">
        <h1>Setting</h1>
        <p>username: {user.username}</p>
        </div>
    );
}

export default Setting;