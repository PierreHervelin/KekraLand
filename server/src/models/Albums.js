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

    description:{
        type:Sequelize.TEXT,
        allowNull: true
    },

    prix:{
        type:Sequelize.FLOAT,
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
    note:{
        type:Sequelize.INTEGER,
        allowNull: false
    }


})

module.exports=Albums