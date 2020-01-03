'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query(
            'SELECT id FROM Users;'
        ).then(users => {
            const userRows = users[0];

            return queryInterface.bulkInsert('Posts', [{
                text: 'Lorem ipsum 1',
                userId: userRows[0].id,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                text: 'Lorem ipsum 2',
                userId: userRows[1].id,
                createdAt: new Date(),
                updatedAt: new Date()
            }],
            {})
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Posts', null, {});
    }
};
