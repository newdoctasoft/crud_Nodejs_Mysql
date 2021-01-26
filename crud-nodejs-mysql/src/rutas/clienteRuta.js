const ruta = require('express').Router();

const clienteControlador = require('../controlador/clienteControlador');

ruta.get('/', clienteControlador.listar);
ruta.get('/mostrarFormulario', clienteControlador.mostrarFormulario);
ruta.post('/insertar', clienteControlador.insertar);
ruta.get('/eliminar/:id', clienteControlador.eliminar);
ruta.get('/buscar/:id', clienteControlador.buscar);
ruta.post('/editar/:id', clienteControlador.editar);


module.exports = ruta;

