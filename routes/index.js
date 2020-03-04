var express = require('express');
var router = express.Router();
var users = require('../models/users.js');

const { Producto, Usuario } = require('../models');


/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.session.username;

  Producto.findAll().then(products => {    
    res.render('index', { title: 'The Jungle', username, products });
  })
});

/**
 * Página con los detalles de un producto, según su referencia.
 */
router.get('/products/:ref', function (req, res, next) {
  // Obtengo la referencia del producto a partir de la ruta
  var ref = req.params.ref;

  Producto.findOne({
    where: {ref}
  })
  .then(product => {
    if (product) {
      // Pasamos los datos del producto a la plantilla
      res.render('product', {product});
    } else {
      // Si no encontramos el producto con esa referencia, redirigimos a página de error.
      res.redirect("/error");
    }
  })



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
  const {email, password} = req.body;

  Usuario.findOne({where: {email, password}})
  .then(usuario => {
    if (usuario) {
      req.session.usuarioId = usuario.id;
      res.redirect("/");
    } else {
      //TODO: inyectar mensaje de error en plantilla
      res.render("login");
    }
  })


});


router.get("/registro", function (req, res, next) {
  res.render("registro", {error:undefined});
});


router.post("/registro", function (req, res, next) {
  const datos = req.body;

  if (datos.nombre.length==0) {
    res.render("registro", {datos, error:"El nombre no debe ir en blanco."})
  }
  else if (datos.apellidos.length==0) {
    res.render("registro", {datos, error:"Los apellidos no deben ir en blanco."})
  }
  else if (datos.email.length==0) {
    res.render("registro", {datos, error:"El email no debe ir en blanco."})
  }
  else if (datos.password.length<6) {
    res.render("registro", {datos, error:"La contraseña debe tener al menos 6 caracteres."})
  }
  else if (datos.password != datos.repassword) {
    res.render("registro", {datos, error:"Las contraseñas no coinciden."})
  }
  else {
    Usuario.create(datos)
    .then(usuario => {
      res.redirect("/login");
    })
  }

});


router.get("/carrito", function (req, res, next) {
  res.render("carrito");
})

module.exports = router;

