const Sequelize = require('sequelize');
const sequelize = require('./db');

// Definimos el modelo para Producto
const Usuario = sequelize.define('usuarios', {
    email: {type: Sequelize.STRING(100), allowNull: false, unique: true},
    password: {type: Sequelize.STRING(40), allowNull: false},
    nombre: {type: Sequelize.STRING(50), allowNull: false},
    apellidos: {type: Sequelize.STRING(80), allowNull: false}
});

module.exports = Usuario;