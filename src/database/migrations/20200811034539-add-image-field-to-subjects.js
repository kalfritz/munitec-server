'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('subjects', 'image', {
      type: Sequelize.STRING(100000),
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('subjects', 'image');
  },
};
