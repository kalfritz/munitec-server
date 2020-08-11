import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Class, {
      foreignKey: 'class_id',
      as: 'classes',
    });
    this.hasMany(models.Attendance, {
      foreignKey: 'student_id',
      as: 'attendances',
    });
    this.hasOne(models.Score, {
      foreignKey: 'student_id',
      as: 'scores',
    });
  }
}
export default Student;
