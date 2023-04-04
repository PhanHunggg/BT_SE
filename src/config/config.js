require("dotenv").config();
console.log(process.env);
module.exports = {
  host: process.env.DB_HOST,
  userName: process.env.DB_USER,
  pass: process.env.DB_PASS,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  database: process.env.DB_DATABASE,
};
