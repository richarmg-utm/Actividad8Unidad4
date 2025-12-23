const express = require('express');
const cors = require('cors');
const rutasUsuario = require('./rutas/rutasUsuario');
const rutasProducto = require('./rutas/rutasProducto');
const rutasHistorial = require('./rutas/rutasHistorial');

const app = express();
const PUERTO = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/usuarios', rutasUsuario);
app.use('/api/productos', rutasProducto);
app.use('/api/historial', rutasHistorial);

app.get('/', (req, res) => {
    res.json({ mensaje: 'API de Gestión de Inventario funcionando correctamente' });
});

app.listen(PUERTO, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PUERTO}`);
});

module.exports = app;
