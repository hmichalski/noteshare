import React from "react";
import './LoginRegisterForm.css';

const LoginRegister = ({ onLogin }) => {
  return (
    <div className="log-in-register-form">
        <p>Please log in or register to access notes.</p>
        <button onClick={onLogin}>Log In</button>
        <div className="separating-line"></div>
        <button onClick={onLogin}>Register</button>
    </div>
  );
};

export default LoginRegister;
