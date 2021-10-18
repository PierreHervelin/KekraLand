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
    },

    description:{
        type:Sequelize.STRING(500),
    },

    login:{
        type:Sequelize.STRING(50),
    }
})

module.exports=Commentaires