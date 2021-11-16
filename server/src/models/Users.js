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
        allowNull: false
    },

    prenom:{
        type:Sequelize.STRING(50),
        allowNull: false
    },

    login:{
        type:Sequelize.STRING(100),
        allowNull: false
    },

    email:{
        type:Sequelize.STRING(100),
        allowNull: false
    },

    password:{
        type:Sequelize.STRING(100),
        allowNull: false
    },
    key:{
        type:Sequelize.STRING(255),
        allowNull: false
    },
    grade:{
        type:Sequelize.BIGINT(11),
        allowNull: false
    },
})

module.exports=Users