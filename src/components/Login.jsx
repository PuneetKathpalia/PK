import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [duration, setDuration] = useState(60);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name, id, duration * 60); // Convert minutes to seconds
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="logo-container">
          <img 
            src="http://www.aon.com/siteImages/aon_logo.gif" 
            alt="AON Logo" 
            className="logo" 
          />
        </div>
        <h2>Assessment Login</h2>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Candidate ID:</label>
          <input 
            type="text" 
            value={id} 
            onChange={(e) => setId(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Test Duration (minutes):</label>
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)}
            min="1"
            required
          />
        </div>
        <button type="submit" className="login-button">Start Assessment</button>
      </form>
    </div>
  );
};

export default Login;