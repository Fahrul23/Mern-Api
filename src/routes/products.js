const express = require('express');
const router =express.Router();


const productsController= require('../controllers/products');

// CREATE PRODUCTS 

router.post('/produc', productsController.createProduct);

// READ PRODUCTS

router.get('/product', productsController.getAllProducts);



module.exports = router; 