const Sequelize = require('sequelize');
const sequelize = require('./db');

const ProductoPedido = sequelize.define('productopedido', {
    cantidad: {type: Sequelize.INTEGER, allowNull:false, defaultValue: 1}
});

module.exports = ProductoPedido;