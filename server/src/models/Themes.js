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
    },

    description:{
        type:Sequelize.STRING(500),
    }
})

module.exports=Themes