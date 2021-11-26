'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            surname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            zipcode: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            company: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            companyStreet: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            companyCity: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            companyZipcode: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            businessId: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            taxId: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            isPayed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Orders');
    },
};
