const Sequelize=require('sequelize')
const db=require('../../config/database')

const Vetements=db.define('Vetements',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },
    
    description:{
        type:Sequelize.STRING,
        allowNull: false
    },

    prix:{
        type:Sequelize.FLOAT,
        allowNull: false
    },

    stock:{
        type:Sequelize.INTEGER,
        allowNull: false
    },

    taille:{
        type:Sequelize.STRING,
        allowNull: false
    },

    nom:{
        type:Sequelize.STRING,
        allowNull: false
    },

    image:{
        type:Sequelize.STRING,
        allowNull: false
    },
})

module.exports=Vetements