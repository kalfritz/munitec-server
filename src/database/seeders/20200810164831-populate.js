'use strict';

const faker = require('faker');

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'schools',
      [
        {
          name: 'Confitec Legacy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Confitec EDU',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Confitec LAB',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Confitec Future',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    //4 schools
    const schools = await queryInterface.sequelize.query(
      `SELECT id from SCHOOLS;`
    );
    const schoolsIds = schools[0].map((school) => school.id);

    const classesFromAllSchools = schoolsIds.map((id) => {
      return [
        {
          name: '1ºA',
          school_id: id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '2ºA',
          school_id: id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '1ºB',
          school_id: id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '2ºB',
          school_id: id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '1ºC',
          school_id: id,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '2ºC',
          school_id: id,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];
    });

    await Promise.all(
      classesFromAllSchools.map((classesFromASchool) =>
        queryInterface.bulkInsert('classes', classesFromASchool, {})
      )
    );

    //24 classes
    const classes = await queryInterface.sequelize.query(
      `SELECT id from CLASSES;`
    );
    const classesIds = classes[0].map((_class) => _class.id);

    await Promise.all(
      classesIds.map(async (id) => {
        const students = [];
        for (let index = 0; index < randomIntFromInterval(10, 20); index++) {
          students.push({
            name: faker.name.firstName(),
            class_id: id,
            created_at: new Date(),
            updated_at: new Date(),
          });
        }
        const subjects = [
          {
            name: 'Português',
            class_id: id,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Matemática',
            class_id: id,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'História',
            class_id: id,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Geografia',
            class_id: id,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Ciências',
            class_id: id,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Inglês',
            class_id: id,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ];

        return Promise.all([
          queryInterface.bulkInsert('students', students, {}),
          queryInterface.bulkInsert('subjects', subjects, {}),
        ]);
      })
    );
  },

  down: async (queryInterface) => {
    await Promise.all([
      queryInterface.bulkDelete('subjects', null, {}),
      queryInterface.bulkDelete('students', null, {}),
      queryInterface.bulkDelete('classes', null, {}),
      queryInterface.bulkDelete('schools', null, {}),
    ]);
  },
};
