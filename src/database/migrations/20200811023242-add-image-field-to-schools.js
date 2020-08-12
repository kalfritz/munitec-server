'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('schools', 'image', {
      type: Sequelize.STRING(100000),
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('schools', 'image');
  },
};
