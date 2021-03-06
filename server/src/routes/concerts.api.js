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

router.get('/:id',async(req,res)=>{
  const concert=await Concerts.findOne({
    where:{
      ProduitId:req.params.id
    }
  })
  if(concert){
    res.send(concert)
  }else{
    res.sendStatus(404)
  }
})

router.get('/destroy', (req, res) => { 
  Concerts.destroy()
  .then(concerts => {
    res.send(concerts);
    res.sendStatus(200).json(concerts);
  })
  .catch(err => console.log(err))
});

router.post('/create', (req, res) => {
  Concerts.create(req.body)
      .then(()=>{
          res.sendStatus(200)
      })
      .catch(err=>console.log(err))
})

module.exports = router