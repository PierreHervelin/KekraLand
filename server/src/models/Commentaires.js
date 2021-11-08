const Sequelize=require('sequelize')
const Sequelize=require('sequelize')
const db=require('../../config/database')

const Commentaires=db.define('Commentaires',{
    id:{
        type:Sequelize.BIGINT(11),
        autoIncrement:true,
        primaryKey:true
    },

    dateCommentaire:{
        type:Sequelize.DATE,
        allowNull: false
    },

    description:{
        type:Sequelize.STRING(500),
        allowNull: false
    },
})

module.exports=Commentaires