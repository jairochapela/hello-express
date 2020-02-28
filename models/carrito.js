const Sequelize = require('sequelize');
const sequelize = require('./db');

// Definimos el modelo para Producto
const Carrito = sequelize.define('carritos', {
});

module.exports = Carrito;