const Product = require('../models/product');

exports.getIndex = (_req, res) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            pageTitle: 'Shop', 
            products: products, 
            path: '/', 
            productCss: true, 
            activeShop: true, 
            hasProducts: products.length > 0
        });
    });
}

exports.fetchAllProducts = (_req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            pageTitle: 'Products', 
            products: products, 
            path: '/products', 
            productCss: true, 
            activeShop: true, 
            hasProducts: products.length > 0
        });
    });
};

exports.getCart = (_req, res) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart'
    });
};

exports.getOrders = (_req, res) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
};

exports.getCheckout = (_req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
};