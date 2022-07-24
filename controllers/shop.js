const Product = require('../models/product');
const Cart = require('../models/cart');

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

exports.fetchProduct = (req, res) => {
    const productId = req.params.productId;
    Product.findById(productId, product => {
        res.render('shop/product-detail', {product, pageTitle: product.title, path: '/products'})
    })
}

exports.getCart = (_req, res) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for(let product of products) {
                const cartProductData = cart.products.find(p => p.id === product.id);
                if((cartProductData)) {
                    cartProducts.push({productData: product, qty: cartProductData.qty});
                }
            }
            res.render('shop/cart', {
                pageTitle: 'Cart',
                path: '/cart',
                products: cartProducts
            });
        })
    })
};

exports.addToCart = (req, res) => {
    const productId = req.body.productId;
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price);
    })
    res.redirect('/cart');
};

exports.deleteFromCart = (req, res) => {
    const productId = req.body.productId;
    Product.findById(productId, product => {
        Cart.deleteProductById(productId, product.price);
        res.redirect('/cart');
    })
}

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