const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: false,
      connectTimeout: 60000,
    }
  }
);

sequelize
  .authenticate()
  .then(() => console.log('MySQL connected successfully!'))
  .catch((err) => console.error('Unable to connect to MySQL:', err));
// automatically create/update tables
sequelize.sync({ alter: true })
  .then(() => console.log("Tables created / updated"))
  .catch(err => console.log(err));

module.exports = sequelize;
