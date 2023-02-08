const {StatusCodes} = require('http-status-codes');
const bcrypt = require('bcryptjs');


const {sequelize, users} = require('../models');
const { createJwt, destroyToken } = require('../utils');

const { BadRequestError, UnauthenticatedError, NotFoundError } = require('../errors');




const register = async (req, res) => {
    const {
    first_name,
	last_name ,
	email ,
	gender ,
	hobbies,
	occupation,
	username ,
	password,
	address
    } = req.body;


    const emailAlreadyExists = await users.findOne({ where: { email: email } });

     if (emailAlreadyExists){
     throw new BadRequestError('Please provide email and password')
     }

     if(!emailAlreadyExists){
        const user = {
        first_name,
        last_name ,
        email ,
        gender ,
        hobbies,
        occupation,
        username ,
        password,
        address
        };



        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        const {uuid} = await users.create(user);

        const tokenUser = {  name: user.username, userId: uuid}

        const token = createJwt({payload: tokenUser});

        return res.status(StatusCodes.CREATED).json({ user: tokenUser, token});
     }
}


const login = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
    //   throw new BadRequestError('Please provide email and password')
     throw new BadRequestError('Please provide email and password')
    }

    const user = await users.findOne({ where: {email: email}});

     if (!user) {
       throw new UnauthenticatedError('Invalid Credentials')
      };

      const passwordIsValid = bcrypt.compareSync(password, user.password)

      if (!passwordIsValid) {
         throw new UnauthenticatedError('Invalid Credentials')
      }

        const {uuid} = user;
        const tokenUser = {  name: user.username, userId: uuid}

        const token = createJwt({payload: tokenUser});

        return res.status(StatusCodes.OK).json({ user: tokenUser, token});
        }


const getUsers =  async (req, res) => {
        const allUsers = await users.findAll();
        return res.status(StatusCodes.OK).json({status: "200", users: allUsers});
     }

const getUser = async (req,res)=> {
    const { uuid: userId } = req.params;

    const user = await users.findOne({ where: { uuid: userId } });

    if(!user){
        throw new NotFoundError(`No user with id : ${userId}`);
    }

    res.status(StatusCodes.OK).json({user})

}

const updateUser = async (req,res)=> {
    const { uuid: userId } = req.params;
    const { hobbies,occupation, address} = req.body;

    const user = await users.findOne({ where: { uuid: userId } });

    user.hobbies = hobbies;
    user.occupation = occupation;
    user.address = address;

    await user.save();


    if(!user){
        throw new NotFoundError(`No user with id : ${userId}`);
    }

    res.status(StatusCodes.OK).json({user})

}



const deleteUser = async (req,res)=> {
    const { uuid: userId } = req.params;


    const user = await users.findOne({ where: { uuid: userId } });


    if(!user){
        throw new NotFoundError(`No user with id : ${userId}`);
    }

    await user.destroy();

    res.status(StatusCodes.OK).json({user})

}




module.exports = {
    register,
    login,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}