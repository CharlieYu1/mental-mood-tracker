import React, { useContext, useState, useEffect } from "react";

import { AuthContext } from "../components/AuthContext";

function Setting() {
    
    const { token, user, loading } = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState('')
    
    

    useEffect(() => {
        // TODO: fetch profile image using services

        setProfileImage(user.profileImage) 
    }, [user])

    if (loading) {
        return <p>Loading user settings...</p>;
    }
    
    if (!user) {
        return <p>Please login to see user settings.</p>
    }
    
    
    return (
        
        
        <div className="profile-page">
            <h1>Profile Page</h1>
            <div className="profile-info">
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>


        </div>
    );
}

export default Setting;