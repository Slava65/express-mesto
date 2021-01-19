const userRouter = require('express').Router();

const {
  getUsers,
  getUser,
  postUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/', postUser);

userRouter.patch('/me', updateUser);

userRouter.patch('/me/avatar', updateAvatar);

module.exports = userRouter;
