//dependencies
var express = require('express');
var router = express.Router();

//models
var Product = require ('../model/product');
//routes
Product.methods(['get', 'put', 'post' 'delete']);
Product.register ('router', '/product');

//Return router
module.exports = router;