require("dotenv").config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USER ,
    password: process.env.POSTGRES_USER_PW,
    database: process.env.DATABASE_NAME,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres"
  },
 test: {
    username: process.env.POSTGRES_USER ,
    password: process.env.POSTGRES_USER_PW,
    database: process.env.DATABASE_NAME,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres"
  },
 production: {
    username: process.env.POSTGRES_USER ,
    password: process.env.POSTGRES_USER_PW,
    database: process.env.DATABASE_NAME,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres"
  }
}
