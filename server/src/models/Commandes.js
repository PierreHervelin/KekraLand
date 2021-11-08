const Sequelize=require('sequelize')
const db=require('../../config/database')

const Commandes=db.define('Commandes',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },

    dateCommande:{
        type:Sequelize.DATEONLY,
        allowNull: false
    },
})

module.exports=Commandes