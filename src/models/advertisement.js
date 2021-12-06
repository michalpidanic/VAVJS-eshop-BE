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
        counter: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
    });

    Advertisement.associate = models => {};

    return Advertisement;
};
