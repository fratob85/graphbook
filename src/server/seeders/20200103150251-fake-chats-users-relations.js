'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        const usersAndChats = Promise.all([
            queryInterface.sequelize.query(
                'SELECT id FROM Users;'
            ),
            queryInterface.sequelize.query(
                'SELECT id FROM Chats;'
            )
        ]);
        return usersAndChats.then(rows => {
            const users = rows[0][0];
            const chats = rows[1][0];

            return queryInterface.bulkInsert('users_chats', [{
                userId: users[0].id,
                chatId: chats[0].id,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                userId: users[1].id,
                chatId: chats[0].id,
                createdAt: new Date(),
                updatedAt: new Date()
            }],
            {})
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users_chats', null, {});
    }
};
