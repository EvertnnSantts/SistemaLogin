import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


//configuração do servidor express (PRECISA SER REVISADA, PORÉM ESTA FUNCIONADO)
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login bem-sucedido
        var sucesso = setErrorMessage('Sucesso');
      } else {
        // Erro no login
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

//frontend
//(É NECESSARIO UM FORMULARIO DE CRIAÇÃO DE CADASTRO)
//CSS DEVE SER CORRIGINDO (MARGEM, PADDING)
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text" 
              id="username"
              placeholder="Usuário"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
       {/* Necessário ajuste no front: */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
