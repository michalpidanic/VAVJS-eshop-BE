'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            price: {
                type: Sequelize.FLOAT,
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
        return queryInterface.bulkInsert('Products', [
            {
                title: 'Gitara',
                image: 'https://live.staticflickr.com/2262/2413472242_b53479ca81.jpg',
                price: 159.99,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Bicie',
                image: 'https://live.staticflickr.com/25/40628731_e79260c1ab.jpg',
                price: 380.49,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Husle',
                image: 'https://live.staticflickr.com/1066/921738874_3417a7d684.jpg',
                price: 75.99,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Flauta',
                image: 'https://live.staticflickr.com/3460/3375872782_38823d59f0_b.jpg',
                price: 29.99,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Products');
    },
};
