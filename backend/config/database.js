const config = require('./index');

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'Dpostgres://oziklkedmtgepz:a7c2996c982bc93064392b92a943e2a112a9cc43f4e46f5e52ef421b32b35471@ec2-100-24-169-249.compute-1.amazonaws.com:5432/daa5gvllkmh9q5',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
