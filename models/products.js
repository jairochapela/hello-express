const Sequelize = require('sequelize');
const sequelize = require('./db');

// Definimos el modelo para Producto
const Producto = sequelize.define('producto', {
  nombre: Sequelize.STRING,
  ref: Sequelize.INTEGER,
  imagen: Sequelize.STRING,
  precio: Sequelize.DECIMAL(10,2),
  existencias: Sequelize.INTEGER,
  descripcion: Sequelize.STRING
});

module.exports = Producto;