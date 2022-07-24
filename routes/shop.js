const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.fetchAllProducts);

router.get('/products/:productId', shopController.fetchProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.addToCart);

router.post('/delete-cart-item', shopController.deleteFromCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;