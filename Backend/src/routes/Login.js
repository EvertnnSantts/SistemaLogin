import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// usuario ficticio
const users = [
  {
    id: 1,
    username: 'user1',
    password: '$2b$10$YHETK/cDgbo1AhId5RiReORv8edQWjxhkS.dsoO1GUzNeW2AeeSIy', // senha "teste123"
  }
];

// Rota de login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;


  // Encontrar usuário no banco de dados
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Usuário não encontrado!' });  
  }

  // Verificar a senha
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Senha incorreta' }); 
  }

  // Gerar token JWT
  const token = jwt.sign({ id: user.id, username: user.username }, 'secreta', { expiresIn: '1h' });

  // Retornar o token para o cliente
  res.json({ token });
});

export default router;
