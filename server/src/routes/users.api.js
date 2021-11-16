const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Users} = require('../models');

router.get('/', async (req, res, next) => {
    await Users.findAll()
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

router.post('/create', (req, res) => {
    Users.create(req.body)
        .then(users => {
            console.log(users)
            res.sendStatus(200).json(users);
        })
        .catch(err => console.log(err))
})

router.post('/login', async (req, res) => {
    const {login, password } = req.body

    const user = await Users.findOne({where: { login: login } });

    if(!user) res.json({ error: "L'utilisateur n'existe pas"});
    if(user.password !== password) res.json({ error: "Erreur de mot de passe"});

    res.json({ error: "Vous etes bien connecté"});
});

router.post('/checkLogin', async (req, res) => {
    const user = await Users.findOne({where: req.body });

    if(!user) {
        console.log('login doesnt exist');
        res.json({exist: false})
    }else{
        console.log('login exist');
        res.json({exist: true})
    }
});

router.post('/checkEmail', async (req, res) => {
    const user = await Users.findOne({where: req.body });

    if(!user) {
        console.log('email doesnt exist');
        res.json({exist: false})
    }else{
        console.log('email exist');
        res.json({exist: true})
    }
});


module.exports = router 