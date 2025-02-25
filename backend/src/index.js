import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { Sequelize } from '../models/ConexaoDB';


const app = express();
const port = 3333;

app.use(express());
app.use(cors());

app.get('/', (req, res ) => {
    res.send('Hello World');
})



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
