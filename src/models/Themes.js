const Sequelize=require('sequelize')
const db=require('../../config/database')

const Themes=db.define('Themes',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },

    nomTheme:{
        type:Sequelize.STRING(50),
        allowNull: false
    },

    description:{
        type:Sequelize.STRING(500),
        allowNull: false
    }
})

module.exports=Themes