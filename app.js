const fs = require('fs')

if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads')
}

const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path')

const app = express()

// connect to mongodb
mongoose.connect('mongodb://localhost:27017/bookstoreDB')
    .then(function () {
        console.log('mongodb connected')
    })
    .catch(function (err) {
        console.log('error', err)
    })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/uploads', express.static('uploads'))

app.set('view engine', 'ejs')
app.set('views', './views')

const bookRoute = require('./routes/bookRoutes')
app.use('/books', bookRoute)

app.get('/', function (req, res) {
    res.redirect('/books')
})

app.listen(9000, function () {
    console.log('server running on http://localhost:9000')
})