const express = require('express');
const { usrRegisterCtrl, usrLoginController,usrProfileCtrl,usrsCtrl, deleteUserCtrl,usrUpdateCtrl } = require('../../controllers/users/usersCtrl');


const userRouter = express.Router();

//POST/api/v1/users/register
userRouter.post('/register', usrRegisterCtrl);

//POST/api/v1/users/login
userRouter.post('/login', usrLoginController);

//GET/api/v1/users/:id
userRouter.get('/profile/:id', usrProfileCtrl);

//GET/api/v1/users
userRouter.get('/', usrsCtrl);

//DELETE/api/v1/users/:id
userRouter.delete('/:id', deleteUserCtrl);


//PUT/api/v1/users
userRouter.put('/:id', usrUpdateCtrl);


module.exports = userRouter; 