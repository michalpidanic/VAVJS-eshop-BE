const productController = require('../controllers').productController;
const orderController = require('../controllers').orderController;
const advertisementController = require('../controllers').advertisementController;

module.exports = app => {
    app.get('/api', (req, res) =>
        res.status(200).send({
            message: 'Welcome to the Todos API!',
        })
    );

    // product routes
    app.post('/api/product', productController.create);
    app.get('/api/product', productController.get);
    app.get('/api/product/:id', productController.retrieve);
    app.delete('/api/product/:id', productController.delete);

    // order routes
    app.post('/api/order', orderController.create);
    app.get('/api/order', orderController.get);
    app.get('/api/order/:id', orderController.retrieve);
    app.delete('/api/order/:id', orderController.delete);
    app.patch('/api/order', orderController.patch);

    // advertisement routes
    app.get('/api/advertisement', advertisementController.get);
    app.post('/api/advertisement', advertisementController.create);
};
