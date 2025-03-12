import LoginDB from '../models/LoginDB.js';



export const getallUsers = async (req, res) => {
    const { id } = req.params;
  
    try {
      if (id) {
        const userResult = await LoginDB.findOne({
          where: { id: id },
        });
  
        if (userResult) {
          return res.status(200).json(userResult);
        } else {
          return res.status(404).json({ message: 'Usuário não encontrado' });
        }
      }
  
        const allUsers = await LoginDB.findAll();
        res.status(200).json(allUsers);
        } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ message: 'Erro ao buscar usuários' });
        }
  };
  

export const createrUsers = async (req, res) => {
  const { usuario, email, senha } = req.body;

  try {
   
    const userExists = await LoginDB.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ message: 'E-mail já cadastrado!' });
    }

   
    const userResult = await LoginDB.create({ usuario, email, senha });
    res.status(201).json({ message: 'Usuário criado com sucesso!', user: userResult });
  } catch (error) {
    console.error('Erro ao criar usuário:', error);

    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Usuário ou e-mail já cadastrado!' });
    }

    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

  