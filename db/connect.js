const Pool = require("pg").Pool;


const pool = new Pool({
     database: process.env.DATABASE_NAME ,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_USER_PW,
      port: process.env.POSTGRES_PORT,
      host: process.env.POSTGRES_HOST
});

module.exports = pool;