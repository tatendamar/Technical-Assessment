require('dotenv').config();
require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const app = express();

const morgan = require('morgan');

//database
const {sequelize} = require('./models');

//routes
const usersRoutes = require('./routes/usersRoutes');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(morgan('dev'));


app.use('/api/v1/auth', usersRoutes);


app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);


const port = process.env.PORT || 5000;

const start = async () => {
 try {
   await sequelize.authenticate();
   await sequelize.sync({force: false})
   app.listen(port, console.log(`Server is listening on port - ${port}`));
 } catch (error) {
    console.log(error);
 }
}

start();
