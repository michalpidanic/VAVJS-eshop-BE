const Order = require('../models').Order;
const OrderItem = require('../models').OrderItem;
const Customer = require('../models').Customer;
const Product = require('../models').Product;

module.exports = {
    create(req, res) {
        const createOrderItems = async id => {
            return await Promise.all(
                req.body.items.map(async item => {
                    await OrderItem.create({ productId: item.id, quantity: item.quantity, orderId: id }).catch(error =>
                        res.status(400).send(error)
                    );
                })
            );
        };

        const createCustomer = async () => {
            const customerData = req.body.customer;

            let customer = await Customer.findOne({ where: { email: customerData.email } }).catch(error => res.status(400).send(error));

            if (customer) {
                return customer;
            } else {
                return await Customer.create({
                    firstName: customerData.firstName,
                    lastName: customerData.lastName,
                    email: customerData.email,
                    phone: customerData.phone,
                    city: customerData.city,
                    zipCode: customerData.zipCode,
                    street: customerData.street,
                }).catch(error => res.status(400).send(error));
            }
        };

        const createOrder = async () => {
            const customer = await createCustomer();

            const orderId = await Order.create({
                state: req.body.state,
                customerId: customer.id,
            })
                .then(order => {
                    return order.dataValues.id;
                })
                .catch(error => res.status(400).send(error));

            await createOrderItems(orderId);

            Order.findOne({ where: { id: orderId } })
                .then(order => res.status(200).send(order))
                .catch(error => res.status(400).send(error));
        };

        createOrder();
    },

    get(req, res) {
        return Order.findAll({
            include: [
                {
                    model: OrderItem,
                    as: 'orderItems',
                    attributes: ['id', 'quantity'],
                    include: [
                        {
                            model: Product,
                            as: 'Product',
                            attributes: ['id', 'title', 'image', 'price'],
                        },
                    ],
                },
                { model: Customer, as: 'Customer', attributes: ['firstName', 'lastName', 'email', 'phone', 'city', 'zipCode', 'street'] },
            ],
        })
            .then(order => res.status(200).send(order))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        return Order.findOne({ where: { id: req.params.id } })
            .then(order => {
                if (!order) {
                    return res.status(404).send({
                        message: 'Not Found',
                    });
                }
                return res.status(200).send(order);
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        return Order.destroy({ where: { id: req.params.id } })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    },

    patch(req, res) {
        return Order.update({ state: req.body.state }, { where: { id: req.body.id } })
            .then(() => res.status(204).send())
            .catch(error => res.status(400).send(error));
    },
};
