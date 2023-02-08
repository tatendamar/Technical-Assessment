const express = require('express');
const router = express.Router();

const { register, getUsers, login, getUser, updateUser, deleteUser } = require('../controllers/usersController');
const authenticationMiddleware = require('../middleware/authentication');



router.post('/register', register);
router.post('/login', login);

router.get('/users', authenticationMiddleware, getUsers);
router.get('/user/:uuid', authenticationMiddleware, getUser);
router.put('/user/:uuid', authenticationMiddleware, updateUser);
router.delete('/user/:uuid', authenticationMiddleware, deleteUser);

module.exports = router;