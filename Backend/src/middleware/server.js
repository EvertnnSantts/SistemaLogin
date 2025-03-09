import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//imports rotas: 
import Login from '../routes/Login.js'

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Rota de login
app.use(Login);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});

