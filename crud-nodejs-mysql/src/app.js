const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const clienteRuta = require('./rutas/clienteRuta');

// settings
app.set('puerto', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'api'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', clienteRuta);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('puerto'), () => {
  console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${app.get('puerto')}`);
});
