module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        companyStreet: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        companyCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        companyZipcode: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        businessId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        taxId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        isPayed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
    });

    Order.associate = models => {
        Order.hasMany(models.OrderItem, {
            foreignKey: 'orderId',
            as: 'orderItems',
        });
    };

    return Order;
};
