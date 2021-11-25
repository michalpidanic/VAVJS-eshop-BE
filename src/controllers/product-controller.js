const Product = require('../models/product').Product;

exports.createProduct = (req, res) => {
    return Product.create({ title: req.body.title, image: req.body.image, price: req.body.price })
        .then(product => res.status(201).send(product))
        .catch(error => res.status(400).send(error));
};
