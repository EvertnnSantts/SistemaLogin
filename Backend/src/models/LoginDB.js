import { sequelize, Sequelize } from "../config/ConexaoDB.js";

const LoginDB = sequelize.define("LoginDB", {
  usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

LoginDB.sync({ alter: true })
  .then(() => {
    console.log('Modelo "LoginDB" sincronizado e atualizado');
  })
  .catch((err) => {
    console.error("Erro ao sincronizar modelo LoginDB:", err);
  });

export default LoginDB;
