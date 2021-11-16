const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const { hashPassword } = require('../core/utils');
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

router.post('/create', (req, res) => {
    const user=req.body

    const {hash,key}=hashPassword(user.password,user.login)

    user.key=key
    user.password=hash

    Users.create(user)
        .then(users => {
            console.log(users)
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
})

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

router.post('/connexion', async (req, res) => {
    const where={}
    
    if(req.body.email){
        where.email=req.body.email
    }else{
        where.login=req.body.login
    }

    const user=await Users.findOne({
        where
    })

    if(!user){
        res.json({exist:false});
    }else{
        const {hash,key}=hashPassword(req.body.password,user.login,user.key)

        if(user.password===hash){
            res.json({exist:true});
        }else{
            res.json({exist:false});
        }
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