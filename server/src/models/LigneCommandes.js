const Sequelize=require('sequelize')
const db=require('../../config/database')

const LigneCommandes=db.define('LigneCommandes',{
    idCommande:{
        type:Sequelize.BIGINT(11),
    },

    idProduit:{
        type:Sequelize.BIGINT(11),
    },

    prixTotal:{
        type:Sequelize.FLOAT,
    }
})

module.exports=LigneCommandes