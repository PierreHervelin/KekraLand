const express = require('express')
const app = express()
const port = 3000

const db=require('../config/database')

db.authenticate()
    .then(()=>console.log('Database connected...'))
    .catch(err=>console.log('Error: '+err))
const {Users}=require('./models/index')
const {UsersAPI}=require('./routes/index')
db.sync()


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/api/users', UsersAPI)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;