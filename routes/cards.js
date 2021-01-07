const cardRouter = require('express').Router();
const path = require('path');
const readJson = require('../utiles/readJson');

cardRouter.get('/', (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
});

module.exports = cardRouter;
