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

cardRouter.post('/', (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link})
    .then(card => res.send({ data: card }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

cardRouter.delete('/:cardId', (req, res) => {
  const { id } = req.params;
  Card.findByIdAndRemove({ id })
    .then(card => res.send({ data: card }))
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
});

module.exports = cardRouter;
