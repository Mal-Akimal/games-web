import React, { useState } from 'react';
import { loginUser, registerUser } from '../api/endpoints'; // Import API calls

const AuthenticationPage = ({ pageType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '', api: '' });
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: '', password: '', api: '' }); // Reset errors
  
    try {
      if (pageType === 'login') {
        const response = await loginUser({ email, password }); // Pass email and password wrapped in a "user" object
        setSuccessMessage(response.message || 'Logged in successfully!'); // Show success message
      } else if (pageType === 'register') {
        const response = await registerUser({ user: { email, password } }); // Wrap email and password in a "user" object as Rails expects
        setSuccessMessage(response.message || 'Registered successfully!'); // Show success message
      }
    } catch (error) {
      // Catch and display API errors
      const apiError = error.message || 'An error occurred. Please try again.';
      setErrors((prev) => ({ ...prev, api: apiError }));
    }
  };
  
  return (
    <div className="auth-container">
      <h1>{pageType === 'login' ? 'Login' : 'Register'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`form-input ${errors.password ? 'error' : ''}`}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>
        {errors.api && <p className="error-text">{errors.api}</p>}
        {successMessage && <p className="success-text">{successMessage}</p>}
        <button type="submit" className="submit-btn">
          {pageType === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthenticationPage;
