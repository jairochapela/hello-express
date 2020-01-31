var express = require('express');
var router = express.Router();
var products = require('../models/products.js');
var users = require('../models/users.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.session.username;
  res.render('index', { title: 'The Jungle', username, products });
});

router.get('/products/:ref', function (req, res, next) {
  // Obtengo la referencia del producto a partir de la ruta
  var ref = req.params.ref;

  // Busco entre los productos el que coincide con la referencia
  const product = products.find(function(p) { 
    return p.ref==ref; 
  });

  if (product) {
    // Pasamos los datos del producto a la plantilla
    res.render('product', {product});
  } else {
    // Si no encontramos el producto con esa referencia, redirigimos a página de error.
    res.redirect("/error");
  }
});

var cesta = []; //provisional

router.post("/comprar", function (req, res, next) {
  const ref = req.body.ref;

  // Busco entre los productos el que coincide con la referencia
  const product = products.find(function(p) { 
    return p.ref==ref; 
  });

  // Añadimos producto a la cesta
  cesta.push(product);
  // Redirigimos a página de productos
  res.redirect("/");
});

router.get("/login", function (req, res, next) {
  res.render("login");
});

/**
 * Procesamiento del formulario de login. Obtiene los datos del formulario en la
 * petición (req) y comprueba si hay algún usuario con ese nombre y contraseña.
 * Si coincide, genera una cookie y dirige a la página principal.
 * Si no coincide, vuelve a cargar la página de login para mostrar un error.
 */
router.post("/login", function (req, res, next) {
  const {username, password} = req.body;
  const user = users.find(function (u) {
    return (u.username == username && u.password == password);
  });

  if (user) {
    req.session.username = username;
    res.redirect("/");
  } else {
    //TODO: inyectar mensaje de error en plantilla
    res.render("login");
  }
});

module.exports = router;

