const Sequelize=require('sequelize')
const db=require('../../config/database')

const Albums=db.define('Albums',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },
    
    nom:{
        type:Sequelize.STRING,
        allowNull: false
    },

    prix:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    quantite:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    image:{
        type:Sequelize.STRING,
        allowNull: false
    },


})

module.exports=Albums