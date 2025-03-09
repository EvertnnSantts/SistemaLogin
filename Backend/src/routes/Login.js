import express from 'express';
import LoginDB from '../models/LoginDB.js'; 

const router = express.Router();

// Rota de login
router.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await LoginDB.findOne({
      where: { usuario: username, senha: password }
    });

    if (user) {
      res.status(200).send({ message: 'Login bem-sucedido!', user });
    } else {
      res.status(401).send({ message: 'Credenciais inválidas!' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send({ message: 'Erro interno do servidor!' });
  }
});

export default router;
