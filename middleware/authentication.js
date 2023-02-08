
const { isTokenValid } = require('../utils');



const authenticationMiddleware = async (req, res, next) => {
     const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
       console.log('Auth invalid')
    }

    const token = authHeader.split(' ')[1];

     try {
        const payload = isTokenValid({token});
        console.log("🚀 ~ file: auth.js ~ line 17 ~ authMiddleware ~ decoded", payload)

      req.user = {userId: payload.userId , name: payload.name};
      next()
    } catch (error) {
        console.log(error)
    }


}

module.exports = authenticationMiddleware;