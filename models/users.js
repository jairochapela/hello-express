const Sequelize = require('sequelize');
const sequelize = require('./db');

// Definimos el modelo para Producto
const Usuario = sequelize.define('usuarios', {
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    nombre: Sequelize.STRING,
    apellidos: Sequelize.STRING
});

module.exports = Usuario;