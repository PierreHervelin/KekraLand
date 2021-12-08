const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");

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

router.get('/bytype/:type', async (req,res)=>{
    if(!['tshirt','hoodie'].includes(req.params.type)){
        res.sendStatus(404)
    }
    console.log(req.query);
    const vetements=await Vetements.findAll({
        where:{
            type:req.params.type
        },
        offset:req.query.offset?Number(req.query.offset):0,
        limit:req.query.limit?Number(req.query.limit):20
    })
    if(vetements){
        res.send(vetements)
    }else{
        res.sendStatus(403)
    }
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