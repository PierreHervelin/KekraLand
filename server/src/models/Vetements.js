const Sequelize=require('sequelize')
const db=require('../../config/database')

const Vetements=db.define('Vetements',{
    description:{
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

    taille:{
        type:Sequelize.INTEGER,
        allowNull: false
    },


})

module.exports=Vetements