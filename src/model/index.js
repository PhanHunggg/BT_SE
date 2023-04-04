const { Sequelize } = require("sequelize");
const config = require("../config/config");
const sequelize = new Sequelize(config.database, config.userName, config.pass, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
});

module.exports = sequelize;
