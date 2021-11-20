const Sequelize=require('sequelize')
const db=require('../../config/database')

const Tracklists=db.define('Tracklists',{
    numero:{
        type:Sequelize.BIGINT(11),
    },

    titre:{
        type:Sequelize.STRING(50),
        allowNull: false
    },

    temps:{
        type:Sequelize.STRING(500),
        allowNull: false
    }
})

module.exports=Tracklists