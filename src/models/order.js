module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        state: {
            type: DataTypes.STRING,
            defaultValue: 'not payed',
            allowNull: false,
        },
    });

    Order.associate = models => {
        Order.hasMany(models.OrderItem, {
            foreignKey: 'orderId',
            as: 'orderItems',
        });
        Order.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            onDelete: 'CASCADE',
        });
    };

    return Order;
};
