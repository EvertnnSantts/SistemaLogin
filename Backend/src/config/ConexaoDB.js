import { Sequelize } from 'sequelize';
const sequelize = new  Sequelize('opfinance', "root", "99452579", {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

  sequelize.authenticate()
  .then(() => {
    console.log('conexão realizada com sucesso!');
  })
  .catch((err) => {
     console.log('erro ao conectar com o banco de dados:', err)
  })

export { sequelize, Sequelize };