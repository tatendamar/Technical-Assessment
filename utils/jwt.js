const jwt = require('jsonwebtoken');

const createJwt = ({ payload }) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });

    return token;
}


const isTokenValid = ({token}) => jwt.verify(token, process.env.JWT_SECRET);


const destroyToken = ({token}) => jwt.destroy(token,  process.env.JWT_SECRET);



module.exports = {
    createJwt,
    isTokenValid,
    destroyToken
}