module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
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
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Customer.associate = models => {
        Customer.hasMany(models.Order, {
            foreignKey: 'customerId',
            as: 'orders',
        });
    };

    return Customer;
};
