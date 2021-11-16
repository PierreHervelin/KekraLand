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

router.get('/byCategorie', (req, res) => {
	//parametres : categorie, offset(par défaut 0), limit(par défaut 20)

    const categorie=req.query.categorie
    const limit=req.query.limit?req.query.limit:20
    const offset=req.query.offset?req.query.offset:0

	if(
		categorie &&
		['vetement','concert','album'].includes(categorie)
	){
	Produits.findAll({
		where:{
			categorie:categorie
		},
		offset,
		limit
	})
		.then(produits => {
			res.send(produits);
			res.sendStatus(200);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500)
		})
	}else{
		res.sendStatus(403)
	}
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