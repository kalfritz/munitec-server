import Sequelize, { Model } from 'sequelize';

class Attendance extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        present: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'student_id',
      as: 'student',
    });
    this.belongsTo(models.Subject, {
      foreignKey: 'subject_id',
      as: 'subject',
    });
  }
}
export default Attendance;
