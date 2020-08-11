'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('scores', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: { model: 'students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      subject_id: {
        type: Sequelize.INTEGER,
        references: { model: 'subjects', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      first_bemester: {
        type: Sequelize.FLOAT,
        min: 0,
        max: 10,
      },
      second_bemester: {
        type: Sequelize.FLOAT,
        min: 0,
        max: 10,
      },
      third_bemester: {
        type: Sequelize.FLOAT,
        min: 0,
        max: 10,
      },
      fourth_bemester: {
        type: Sequelize.FLOAT,
        min: 0,
        max: 10,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('scores');
  },
};
