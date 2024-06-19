import React, { useContext, useState, useEffect } from "react";

import userService from '../services/user'
import { AuthContext } from "../components/AuthContext";

function Setting() {
    
    const { token, user, loading } = useContext(AuthContext);
    const [profileImage, setProfileImage] = useState('')  

    useEffect(() => {
        // TODO: fetch profile image using services

        setProfileImage(user.profileImage) 
    }, [user])

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        console.log(token)
        try {
            const response = await userService.uploadProfileImage( file, token )
            console.log(response)
        } catch (error) {
            console.error("Upload failed", error)
        }
    }

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
            <div className="profile-image">
                <h2>Profile Picture</h2>
                {profileImage && <img src={profileImage} alt="Profile" />}
                <input type="file" accept="image/jpeg, image/png" onChange={handleImageUpload} />
            </div>

        </div>
    );
}

export default Setting;