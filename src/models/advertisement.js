module.exports = (sequelize, DataTypes) => {
    const Advertisement = sequelize.define('Advertisement', {
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Advertisement.associate = models => {};

    return Advertisement;
};
