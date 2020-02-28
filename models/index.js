const sequelize = require('./db');
const Producto = require('./products');
const Usuario = require('./users');
const Pedido = require('./pedido');
const Carrito = require('./carrito');
const ProductoCarrito = require('./producto-carrito');


Usuario.hasOne(Carrito);
Carrito.belongsTo(Usuario);

Usuario.hasMany(Pedido);
Pedido.belongsTo(Usuario);

Carrito.belongsToMany(Producto, {through: ProductoCarrito});
Producto.belongsToMany(Carrito, {through: ProductoCarrito});

// Finalmente conectamos con la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync({alter: true}); //crea las tablas si no existen
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = {
      Producto,
      Pedido,
      Usuario, 
      Carrito
  }