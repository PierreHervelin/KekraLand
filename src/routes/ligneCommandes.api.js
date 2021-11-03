const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {LigneCommandes} = require('../models');

router.get('/', (req, res, next) => {
  LigneCommandes.findAll()
    .then(ligneCommandes => {
      res.send(ligneCommandes);
      res.sendStatus(200).json(ligneCommandes);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  LigneCommandes.destroy()
  .then(ligneCommandes => {
    res.send(ligneCommandes);
    res.sendStatus(200).json(ligneCommandes);
  })
  .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  LigneCommandes.create()
    .then(ligneCommandes => {
      console.log(ligneCommandes)
      res.sendStatus(200).json(ligneCommandes);
    })
    .catch(err => console.log(err))
})

module.exports = router