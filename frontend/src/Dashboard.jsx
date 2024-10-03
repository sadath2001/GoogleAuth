import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const userData = JSON.parse(data);
        setUserInfo(userData);

        // Handle image loading asynchronously
        const img = new Image();
        img.src = userData?.image;
        img.onload = () => setImageLoaded(true);
    }, [userInfo?.image]);

    const handleLogout = () => {
        localStorage.removeItem('user-info');
        navigate('/login');
    };

    return (
        <>
            <h1>Welcome {userInfo?.name}</h1>
            <h3>{userInfo?.email}</h3>
            {imageLoaded ? (
                <img src={userInfo?.image} alt={userInfo?.name} />
            ) : (
                <div>Loading...</div> // Placeholder or loading indicator
            )}
            <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Dashboard;