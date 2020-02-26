const sequelize = require('./db');
const Producto = require('./products');

// Finalmente conectamos con la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = {
      Producto
  }