const Sequelize=require('sequelize')
const db=require('../../config/database')

const Users=db.define('Users',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },

    nom:{
        type:Sequelize.STRING(50),
    },

    prenom:{
        type:Sequelize.STRING(50),
    },

    login:{
        type:Sequelize.STRING(100),
    },

    password:{
        type:Sequelize.STRING(100),
    },

    grade:{
        type:Sequelize.BIGINT(11),
    },
})

module.exports=Users