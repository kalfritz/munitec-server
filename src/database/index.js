import Sequelize from 'sequelize';

import School from '../models/School';
import Class from '../models/Class';
import Student from '../models/Student';
import Subject from '../models/Subject';
import Score from '../models/Score';
import Attendance from '../models/Attendance';

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
