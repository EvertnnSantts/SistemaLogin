import React from 'react';
import './Login.css';

import { useState } from "react";

const Login = () => {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("envio");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input type="email" id="username" placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-container">
            <input type="password" id="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
