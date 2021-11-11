const Sequelize=require('sequelize')
const db=require('../../config/database')

const Produits=db.define('Produits',{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },

    categorie:{
        type:Sequelize.STRING,
        allowNull: false
    },
})

module.exports=Produits