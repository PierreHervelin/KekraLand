const express = require('express')
const app = express()
const port = 3000

const db=require('../config/database')

db.authenticate()
    .then(()=>console.log('Database connected...'))
    .catch(err=>console.log('Error: '+err))
const {Users, Themes, Produits, LigneCommandes, Commandes, Commentaires}=require('./models/index')
const {UsersAPI, CommandesAPI, LigneCommandesAPI, ProduitsAPI, CommentairesAPI, ThemesAPI}=require('./routes/index')
db.sync()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

Users.hasOne(Commentaires)
Themes.hasOne(Commentaires)
Users.hasOne(Commandes)
Commandes.hasOne(LigneCommandes)
Produits.hasOne(LigneCommandes)

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