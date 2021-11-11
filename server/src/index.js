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
const {Users, Themes, Produits, LigneCommandes, Commandes, Commentaires, Albums, Concerts, Vetements}=require('./models/index')
const {UsersAPI, CommandesAPI, LigneCommandesAPI, ProduitsAPI, CommentairesAPI, ThemesAPI, AlbumsAPI, ConcertsAPI, VetementsAPI}=require('./routes/index')
db.sync()

Users.hasOne(Commentaires)
Themes.hasOne(Commentaires)
Users.hasOne(Commandes)
Produits.hasOne(Vetements)
Produits.hasOne(Albums)
Produits.hasOne(Concerts)

Commandes.belongsToMany(Produits, { through: LigneCommandes })
Produits.belongsToMany(Commandes, { through: LigneCommandes })

app.use('/api/users', UsersAPI)
app.use('/api/produits', ProduitsAPI)
app.use('/api/themes', ThemesAPI)
app.use('/api/ligneCommandes', LigneCommandesAPI)
app.use('/api/commentaires', CommentairesAPI)
app.use('/api/commandes', CommandesAPI)
app.use('/api/albums', AlbumsAPI)
app.use('/api/concerts', ConcertsAPI)
app.use('/api/vetements', VetementsAPI)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;