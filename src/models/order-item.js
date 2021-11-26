module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
        pieces: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    OrderItem.associate = models => {
        OrderItem.hasOne(models.Product, {
            foreignKey: 'id',
            as: 'product',
        });
    };

    return OrderItem;
};
