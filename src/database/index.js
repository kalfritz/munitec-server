import Sequelize from 'sequelize';

import School from '../app/models/School';
import Class from '../app/models/Class';
import Student from '../app/models/Student';
import Subject from '../app/models/Subject';
import Score from '../app/models/Score';
import Attendance from '../app/models/Attendance';

import databaseConfig from '../config/database';

const models = [School, Class, Student, Subject, Score, Attendance];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
