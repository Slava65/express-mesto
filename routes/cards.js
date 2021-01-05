const cardRouter = require('express').Router();
const readJson = require('../utiles/readJson');
const path = require('path');

cardRouter.get('/', (req, res) => {
  readJson(path.join(__dirname, '..',  'data', 'cards.json'))
  .then((users) => {
    res.send(users);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
})

module.exports = cardRouter;