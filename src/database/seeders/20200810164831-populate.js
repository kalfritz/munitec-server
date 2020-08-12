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
          image:
            'data:image/jpeg;base64,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',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Confitec EDU',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVaMW8otZx2AHkWP0KdS-BEUML2NpUS362zw&usqp=CAU',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Confitec LAB',
          image:
            'data:image/jpeg;base64,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',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Confitec Future',
          image:
            'https://static.vecteezy.com/system/resources/previews/000/672/296/non_2x/outside-of-school-building-vector.jpg',
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
            image:
              'https://consumare.org/activeapp/wp-content/uploads/2020/05/5c8c8a0a140277d8d4e3db27ded48fa7.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Matemática',
            class_id: id,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMM8b8tnFXPV5_R6vb7XmM1JMWGQwDyZB9pg&usqp=CAU',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'História',
            class_id: id,
            image:
              'https://www.estudokids.com.br/wp-content/uploads/2015/08/a-importancia-de-se-estudar-historia-1200x675.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Geografia',
            class_id: id,
            image: 'https://wallpapercave.com/wp/wp2008713.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Ciências',
            class_id: id,
            image:
              'https://ava.cmc.eb.mil.br/moodle/pluginfile.php/63627/course/section/3259/depositphotos_80389294-stock-illustration-back-to-school-science-lab.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            name: 'Inglês',
            class_id: id,
            image:
              'https://i.pinimg.com/originals/e6/06/02/e6060245f4f44c3b6ee831c5724e10e7.jpg',
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
