import express from 'express';
import cors from 'cors';
import Login from './routes/userRoutes.js';


const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.use('/api', Login);

app.get('/test', (req, res) => {
  res.status(200).send('Funcionou!');
});

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});
