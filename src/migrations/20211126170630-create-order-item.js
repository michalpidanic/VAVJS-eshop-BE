'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('OrderItems', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            quantity: {
                type: Sequelize.INTEGER,
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
            productId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                reference: {
                    model: 'Product',
                    key: 'id',
                    as: 'productId',
                },
            },
            orderId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                reference: {
                    model: 'Order',
                    key: 'id',
                    as: 'orderId',
                },
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('OrderItems');
    },
};
