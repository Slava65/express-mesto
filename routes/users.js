const userRouter = require('express').Router();
const path = require('path');
const readJson = require('../utiles/readJson');

userRouter.get('/', (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

userRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      const currentUser = users.find((user) => user._id === id);
      if (!currentUser) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(currentUser);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = userRouter;
