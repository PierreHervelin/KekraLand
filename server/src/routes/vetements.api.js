const express = require('express');
const router = express.Router();

const db = require('../../config/database');
const {Vetements} = require('../models');

router.get('/', (req,res)=>{
    Vetements.findAll()
        .then(vetements => {
            res.send(vetements);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
});

router.get('/destroy',(req, res)=>{
    Vetements.destroy()
        .then(vetements=>{
            res.send(vetements);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
});

router.post('/create', (req, res) => {
    Vetements.create(req.body)
        .then(vetements=>{
            console.log(vetements)
            res.sendStatus(200)
        })
        .catch(err=>console.log(err))
})

router.get('/:id',(req,res)=>{
    Vetements.findAll({
        where:{
            ProduitId:req.params.id
        }
    })
        .then(value=>{
            if(value){
                res.send(value)
            }else{
                res.sendStatus(403)
            }
        })
        .catch(err=>{
            console.log(err)
            res.sendStatus(500)
        })
})

module.exports = router