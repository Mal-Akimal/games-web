import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/endpoint'; // Make sure this is the correct path to your API utilities

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
