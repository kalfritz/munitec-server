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
      firstBimester: {
        type: Sequelize.FLOAT,
        allowNull: false,
        min: 0,
        max: 10,
      },
      secondBimester: {
        type: Sequelize.FLOAT,
        allowNull: false,
        min: 0,
        max: 10,
      },
      thirdBimester: {
        type: Sequelize.FLOAT,
        allowNull: false,
        min: 0,
        max: 10,
      },
      fourthBimester: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
