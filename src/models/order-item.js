module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    OrderItem.associate = models => {
        OrderItem.belongsTo(models.Product, {
            foreignKey: 'productId',
            onDelete: 'CASCADE',
        });
        OrderItem.belongsTo(models.Order, {
            foreignKey: 'orderId',
            onDelete: 'CASCADE',
        });
    };

    return OrderItem;
};
