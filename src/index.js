const express = require('express')

const app = express()
const personRoute = require('./routes/person') 
const costumerRoute = require('./routes/costumer')
const path = require('path')
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} ==> ${req.originalUrl}`, req.body)

    next()
})

app.use(personRoute)
app.use(costumerRoute)
app.use(express.static('public'))

//Handeler for 404
app.use((req, res, next) => {
    res.status(404).send('Deu aguia man')

})
//Handeler for 500
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Server runnning on ${PORT}`))

