import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; 
import axios from 'axios';
import loginRoutes from '../routes/Login.js'; 
 

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Rota de login
app.use('/api', loginRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});

