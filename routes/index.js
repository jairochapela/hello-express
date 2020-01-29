var express = require('express');
var router = express.Router();
var products = require('../models/products.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Jungle', products });
});

router.get('/products/:ref', function (req, res, next) {
  var ref = req.params.ref;
  const product = products.find(function(p) { 
    return p.ref==ref; 
  });
  res.render('product', {product});
});

module.exports = router;
