'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Chats', [{
            firstName: 'Francesco',
            lastName: 'Tobia',
            email: 'test@testtest.it',
            createdAt: new Date(),
            updatedAt: new Date()
        }],
        {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Chats', null, {});
    }
};
