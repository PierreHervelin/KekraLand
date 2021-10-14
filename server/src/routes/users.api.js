const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Users} = require('../models');

router.get('/', (req, res, next) => {
  Users.findAll()
    .then(users => {
      res.send(users);
      res.sendStatus(200).json(users);
    })
    .catch(err => console.log(err))
});


router.get('/destroy', (req, res) => { 
  Users.destroy()
  .then(users => {
    res.send(users);
    res.sendStatus(200).json(users);
  })
  .catch(err => console.log(err))
});

router.get('/create', (req, res) => {
  Users.create()
    .then(users => {
      console.log(users)
      res.sendStatus(200).json(users);
    })
    .catch(err => console.log(err))
})

module.exports = router 