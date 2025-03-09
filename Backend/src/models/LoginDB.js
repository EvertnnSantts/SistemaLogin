import { sequelize, Sequelize } from '../config/ConexaoDB.js';

const LoginDB = sequelize.define('LoginDB', {
  usuario: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

LoginDB.sync({ force: false })
  .then(() => {
    console.log('Modelo "LoginDB" sincronizado com o banco de dados');
  })
  .catch(err => {
    console.error('Erro ao sincronizar modelo LoginDB com o banco de dados:', err);
  });

export default LoginDB;
