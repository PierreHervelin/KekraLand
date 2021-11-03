const express = require('express')
const app = express()
const cors = require("cors");
const port = 3001

app.use(express.json());
app.use(cors());


const db=require('../config/database')

db.authenticate()
    .then(()=>console.log('Database connected...'))
    .catch(err=>console.log('Error: '+err))
const {Users, Themes, Produits, LigneCommandes, Commandes, Commentaires}=require('./models/index')
const {UsersAPI, CommandesAPI, LigneCommandesAPI, ProduitsAPI, CommentairesAPI, ThemesAPI}=require('./routes/index')
db.sync()

Users.hasOne(Commentaires)
Themes.hasOne(Commentaires)
Users.hasOne(Commandes)
Commandes.belongsToMany(Produits, { through: LigneCommandes })
Produits.belongsToMany(Commandes, { through: LigneCommandes })

app.use('/api/users', UsersAPI)
app.use('/api/produits', ProduitsAPI)
app.use('/api/themes', ThemesAPI)
app.use('/api/ligneCommandes', LigneCommandesAPI)
app.use('/api/commentaires', CommentairesAPI)
app.use('/api/commandes', CommandesAPI)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;