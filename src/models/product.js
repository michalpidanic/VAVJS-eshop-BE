module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    });

    Product.associate = models => {};

    return Product;
};
