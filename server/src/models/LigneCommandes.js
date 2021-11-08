const Sequelize=require('sequelize')
const db=require('../../config/database')

const LigneCommandes=db.define('LigneCommandes',{
    quantite:{
        type:Sequelize.BIGINT(11),
        allowNull: false
    },

    prixTotal:{
        type:Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports=LigneCommandes