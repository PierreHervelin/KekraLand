const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Concerts} = require('../models');

router.get('/', (req, res, next) => {
  Concerts.findAll()
    .then(concerts => {
      res.send(concerts);
      res.sendStatus(200).json(concerts);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  Concerts.destroy()
  .then(concerts => {
    res.send(concerts);
    res.sendStatus(200).json(concerts);
  })
  .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  Concerts.create()
    .then(concerts => {
      console.log(concerts)
      res.sendStatus(200).json(concerts);
    })
    .catch(err => console.log(err))
})

module.exports = router