const Product = require('../models').Product;

module.exports = {
    create(req, res) {
        return Product.create({ title: req.body.title, image: req.body.image, price: req.body.price })
            .then(product => res.status(201).send(product))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Product.findAll()
            .then(products => res.status(200).send(products))
            .catch(error => res.status(400).send(error));
    },

    get(req, res) {
        return Product.findOne({ where: { id: req.params.id } })
            .then(product => res.status(200).send(product))
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        return Product.destroy({ where: { id: req.params.id } })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    },
};
