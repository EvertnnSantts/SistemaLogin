import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setError] = useState('');
  const [token, setToken] = useState('');

  //configuração do servidor express (PRECISA SER REVISADA, PORÉM ESTA FUNCIONANDO)
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envia a requisição POST para o servidor de login
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });

      // Salva o token em localStorage
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);

      // Exibe mensagem de sucesso
      alert('login bem-sucedido!');
    } catch (err) {
      // Exibe mensagem de erro
      setError(err.response ? err.response.data.message : 'erro ao fazer login');
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        {/* Necessário ajuste no front: */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {token && <p>Token JWT: </p>}
      </div>
    </div>
  );
};

export default Login;
