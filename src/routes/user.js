const { Router } = require('express');
const userRouter = Router();

const createUser = require('../handlers/User/createUserHandler');
const deleteUser = require('../handlers/User/deleteUserHandler');
const editUser = require('../handlers/User/editUserHandler');

// OK
userRouter.post('/create', createUser);

// OK
userRouter.put('/edit/:id', editUser);

// OK
userRouter.delete('/delete/:id', deleteUser);

module.exports = userRouter;