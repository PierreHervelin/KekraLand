const Sequelize=require('sequelize')
const db=require('../../config/database')

const Produits=db.define('Produits',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },

    nomProduit:{
        type:Sequelize.STRING(100),
        allowNull: false
    },

    description:{
        type:Sequelize.STRING(100),
        allowNull: false
    },

    prix:{
        type:Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports=Produits