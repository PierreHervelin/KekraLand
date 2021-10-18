const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Themes} = require('../models');

router.get('/', (req, res, next) => {
    Themes.findAll()
      .then(themes => {
        res.send(themes);
        res.sendStatus(200).json(themes);
      })
      .catch(err => console.log(err))
  });


router.get('/destroy', (req, res) => { 
  Themes.destroy()
    .then(themes => {
    res.send(themes);
    res.sendStatus(200).json(themes);
  })
  .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  Themes.create()
    .then(themes => {
      console.log(themes)
      res.sendStatus(200).json(themes);
    })
    .catch(err => console.log(err))
})

module.exports = router