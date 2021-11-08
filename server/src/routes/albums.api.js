const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Albums} = require('../models');

router.get('/', (req, res, next) => {
  Albums.findAll()
    .then(albums => {
      res.send(commandes);
      res.sendStatus(200).json(commandes);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  Commandes.destroy()
  .then(commandes => {
    res.send(commandes);
    res.sendStatus(200).json(commandes);
  })
  .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  Commandes.create()
    .then(commandes => {
      console.log(commandes)
      res.sendStatus(200).json(commandes);
    })
    .catch(err => console.log(err))
})

module.exports = router