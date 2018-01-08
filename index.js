var express            = require('express')
var mongoose           = require('mongoose')
var hbs                = require('express-handlebars')
var app                = express()
const questions        = require('./controllers/question')

// mongoose.connect('mongodb://localhost/stack-me')


app.set('view engine', 'hbs')
app.set('views', './views')

var routes = require('./config/routes')
app.use(routes)

app.listen(3000, () => {
    console.log('app listening on port 3000')
})