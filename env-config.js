require('dotenv').config()

module.exports={
    DB_name:process.env.DB_NAME,
    DB_user:process.env.DB_USERNAME,
    DB_mdp:process.env.DB_MDP,
    DB_host:process.env.DB_HOST
}