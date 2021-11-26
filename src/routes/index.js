const productController = require('../controllers').productController;

module.exports = app => {
    app.get('/api', (req, res) =>
        res.status(200).send({
            message: 'Welcome to the Todos API!',
        })
    );

    // product routes
    app.post('/api/product', productController.create);
    app.get('/api/product', productController.list);
    app.get('/api/product/:id', productController.get);
    app.delete('/api/product/:id', productController.delete);
};
