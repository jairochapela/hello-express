const Sequelize = require('sequelize');
const sequelize = require('./db');

const ProductoCarrito = sequelize.define('productocarrito', {
    cantidad: {type: Sequelize.INTEGER, allowNull:false, defaultValue: 1}
});

module.exports = ProductoCarrito;