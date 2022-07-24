const Product = require('../models/product');

exports.getAddProductPage = (_req, res) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        productCss: true, 
        formsCss: true, 
        activeAddProduct: true,
        isEditing: false
    });
};

exports.addProduct = (req, res) => {
    const {title, imageUrl, description, price} = req.body;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getEditProductPage = (req, res) => {
    const isEditMode = req.query.edit;
    const productId = req.params.productId;
    if(!isEditMode) {
        res.redirect('/admin/add-product');
    }
    Product.findById(productId, (product) => {
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product', 
            path: '/admin/edit-product',
            isEditing: !!isEditMode,
            product: product
        });
    })
};

exports.editProduct = (req, res) => {
    const { id, title, imageUrl, price, description } = req.body;
    const updatedProduct = new Product(id, title, imageUrl, description, price);
    updatedProduct.save();
    res.redirect('/admin/products');
};

exports.deleteProduct = (req, res) => {
    const productId = req.body.productId;
    Product.deleteById(productId);
    res.redirect('/admin/products');
}

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
};