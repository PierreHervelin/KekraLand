const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Tracklists} = require('../models');

router.get('/', (req, res, next) => {
    Tracklists.findAll()
        .then(tracklists => {
            res.send(tracklists);
            res.sendStatus(200).json(tracklists);
        })
        .catch(err => console.log(err))
  });


router.get('/destroy', (req, res) => { 
    Tracklists.destroy()
        .then(tracklists => {
            res.send(tracklists);
            res.sendStatus(200).json(tracklists);
        })
        .catch(err => console.log(err))
});

router.post('/create', (req, res) => {
    console.log(req.body);
    Tracklists.create(req.body)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

module.exports = router