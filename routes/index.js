var express = require('express');
var router = express.Router();
var products = require('../models/products.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Jungle', products });
});

router.get('/products/:ref', function (req, res, next) {
  // Obtengo la referencia del producto a partir de la ruta
  var ref = req.params.ref;

  // Busco entre los productos el que coincide con la referencia
  const product = products.find(function(p) { 
    return p.ref==ref; 
  });

  // Pasamos los datos del producto a la plantilla
  res.render('product', {product});
});

module.exports = router;
