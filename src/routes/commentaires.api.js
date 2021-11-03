const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Commentaires} = require('../models');

router.get('/', (req, res, next) => {
  Commentaires.findAll()
    .then(commentaires => {
      res.send(commentaires);
      res.sendStatus(200).json(commentaires);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  Commentaires.destroy()
  .then(commentaires => {
    res.send(commentaires);
    res.sendStatus(200).json(commentaires);
  })
  .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  Commentaires.create()
    .then(commentaires => {
      console.log(commentaires)
      res.sendStatus(200).json(commentaires);
    })
    .catch(err => console.log(err))
})

module.exports = router