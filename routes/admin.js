const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/add-product', adminController.getAddProductPage);

router.post('/add-product', adminController.addProduct);

router.get('/edit-product/:productId', adminController.getEditProductPage);

router.post('/edit-product', adminController.editProduct);

router.post('/delete-product', adminController.deleteProduct);

router.get('/products', adminController.getProducts);


module.exports = router;