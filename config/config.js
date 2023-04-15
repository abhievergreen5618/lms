require("dotenv").config();

module.exports = {
  IS_PROD: process.env.NODE_ENV === 'production',
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  DB_USERNAME: encodeURIComponent(process.env.DB_USERNAME),
  DB_PASSWORD: encodeURIComponent(process.env.DB_PASSWORD),
  DB_DATABASE_NAME: process.env.DB_DATABASE_NAME,
  DB_CLUSTER: process.env.DB_CLUSTER,
  SESS_SECRET: process.env.SESS_SECRET,
  COOKIE_NAME: process.env.COOKIE_NAME,
};