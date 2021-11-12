const Sequelize = require('sequelize');
const env=require('../../env-config')

module.exports = new Sequelize(env.DB_name, env.DB_user, env.DB_mdp, {
    host:env.DB_host,
    dialect:'mysql',
    operatorsAliases:false,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})