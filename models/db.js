const Sequelize = require('sequelize');

// Primero definimos sequelize con los parámetros de conexión
const sequelize = new Sequelize('tienda', 'jairo', 'abc123.', {
  host: '192.168.0.240',
  dialect: 'mariadb'
});

module.exports = sequelize;