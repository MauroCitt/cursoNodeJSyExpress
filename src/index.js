import bodyParser from 'body-parser'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

const app = express()
app.disable('x-powered-by')

app.set('env', 'development')
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Curso de Node.js',
    message: 'Nuestro primer layout con variables'
  })
})

app.get('/temario', (req, res) => {
  res.render('temario', {
    title: 'Temario del curso',
  })
})

app.listen('9000', () => console.log('Server running on port 9000'));