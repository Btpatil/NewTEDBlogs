const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// static foles
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))

// templating engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// routes
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)

// listen onport 5000
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})

