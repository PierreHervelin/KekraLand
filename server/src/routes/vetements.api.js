const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Vetements} = require('../models');

router.get('/', (req, res, next) => {
  Vetements.findAll()
    .then(vetements => {
      res.send(vetements);
      res.sendStatus(200).json(vetements);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  Vetements.destroy()
  .then(vetements => {
    res.send(vetements);
    res.sendStatus(200).json(vetements);
  })
  .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  Vetements.create()
    .then(vetements => {
      console.log(vetements)
      res.sendStatus(200).json(vetements);
    })
    .catch(err => console.log(err))
})

module.exports = router