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

//rutas
app.get('/', (req, res) => {
  res.render('home', {
    title: 'OpenWebinars',
    message: 'Curso de NodeJS - Home'
  })
  res.end()
})

app.get('/temario', (req, res) => {
  res.render('temario', {
    title: 'OpenWebinars',
    message: 'Curso de NodeJS - Temario'
  })
  res.end()

})


app.get('/:user', (req, res) => {
  res.render('user', {
    title: 'OpenWebinars',
    message: `Bienvenido ${req.params.user}`
  })
})

app.use('/static', express.static(path.join(__dirname, 'public')));

// Manejador de error 404 (después de todas las rutas)
app.use((req, res, next) => {
  res.status(404).send('Página no encontrada');
});




app.listen('9000', () => console.log('Server running on port 9000'));

