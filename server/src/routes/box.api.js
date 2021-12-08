const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const db = require("../../config/database");
const { Vetements, Albums,Tracklists } = require("../models");

router.get("/getbox", async (req, res) => {
  const vetements = await Vetements.findAll({
    where: {
      [Op.or]: [
        { ProduitId: "eeffb83b-7e49-490b-a0b6-034298db1d9e" }, //tshirt noir
        { ProduitId: "c4f6df65-f436-43b2-89c9-13c60afc60e7" }, //tshirt blanc
      ],
    }
  });
  const albums = await Albums.findAll({
    where: {
      [Op.or]:[
        {ProduitId : 'f93f3aef-767e-4b3b-83b8-2ab15b3e8c24'}, //Base
        {ProduitId : '25b5abef-9368-4086-b270-ca790b38c79f'} // Free                  
      ] 
    }
  });
  const tracklists = await Tracklists.findAll({
    where: {
      [Op.or]: [
        { ProduitId: "f93f3aef-767e-4b3b-83b8-2ab15b3e8c24" }, //Tracklist Base
        { ProduitId: "25b5abef-9368-4086-b270-ca790b38c79f" }, //Tracklist Free
      ],
    }
  });
  if(albums && vetements && tracklists){
    res.json({
        albums, 
        vetements,
        tracklists
    })
  }
  else{
      res.sendStatus(404)
  }
});



module.exports = router;
