const Order = require('../models').Order;
const OrderItem = require('../models').OrderItem;
const Product = require('../models').Product;

module.exports = {
    create(req, res) {
        const createOrderItems = async id => {
            return await Promise.all(
                req.body.items.map(async item => {
                    await OrderItem.create({ productId: item.id, pieces: item.pieces, orderId: id }).catch(error =>
                        res.status(400).send(error)
                    );
                })
            );
        };

        const createOrder = async () => {
            const orderId = await Order.create({
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email,
                phone: req.body.phone,
                street: req.body.street,
                city: req.body.city,
                zipcode: req.body.zipcode,
                company: req.body.company ?? null,
                companyStreet: req.body.companyStreet ?? null,
                companyCity: req.body.companyCity ?? null,
                companyZipcode: req.body.companyZipcode ?? null,
                businessId: req.body.businessId ?? null,
                taxId: req.body.taxId ?? null,
                isPayed: req.body.isPayed,
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
                },
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
};
