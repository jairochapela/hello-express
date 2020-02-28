const Sequelize = require('sequelize');
const sequelize = require('./db');

// Definimos el modelo para Producto
const Pedido = sequelize.define('pedidos', {
    estado: Sequelize.ENUM('PDTE_PAGO', 'PAGADO', 'CANCELADO'),
    direccionEntrega: Sequelize.STRING(200)
});

module.exports = Pedido;