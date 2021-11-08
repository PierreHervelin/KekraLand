const Sequelize=require('sequelize')
const db=require('../../config/database')

const Produits=db.define('Produits',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },

    categorie:{
        type:Sequelize.STRING,
        allowNull: false
    },
})

module.exports=Produits