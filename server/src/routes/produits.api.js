const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Produits} = require('../models');

router.get('/', (req, res, next) => {
  Produits.findAll()
    .then(produits => {
      res.send(produits);
      res.sendStatus(200).json(produits);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  Produits.destroy()
  .then(produits => {
    res.send(produits);
    res.sendStatus(200).json(produits);
  })
  .catch(err => console.log(err))
});

router.post('/create', (req, res) => {
  console.log(req.body);
  Produits.create(req.body)
    .then(produit => {
      console.log(produit)
      res.sendStatus(200).json(produit);
    })
    .catch(err => console.log(err))
})

module.exports = router