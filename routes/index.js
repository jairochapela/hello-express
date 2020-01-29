var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const products = [
    {nombre: "Microondas", precio: 45, existencias: 6},
    {nombre: "Frigorífico", precio: 200, existencias: 4},
    {nombre: "Lámpara", precio: 20, existencias: 14},
    {nombre: "TV", precio: 90, existencias:0},
    {nombre: "Lavadora", precio: 290, existencias:3},
    {nombre: "Secadora", precio: 180, existencias:5}
  ];

  res.render('index', { title: 'The Jungle', products });
});

module.exports = router;
