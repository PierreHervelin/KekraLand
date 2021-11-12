const Sequelize=require('sequelize')
const db=require('../../config/database')

const Concerts=db.define('Concerts',{
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
        type:Sequelize.STRING,
        allowNull: false
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


})

module.exports=Concerts