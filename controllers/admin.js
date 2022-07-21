const Product = require('../models/product');

exports.getAddProductPage = (_req, res) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        productCss: true, 
        formsCss: true, 
        activeAddProduct: true
    });
};

exports.getProducts = (_req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', {
            pageTitle: 'Admin Products', 
            products: products, 
            path: '/admin/products', 
            productCss: true, 
            activeShop: true, 
            hasProducts: products.length > 0
        });
    });
}

exports.addProduct = (req, res) => {
    const {title, imageUrl, description, price} = req.body;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};