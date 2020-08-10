import Sequelize, { Model } from 'sequelize';

class Score extends Model {
  static init(sequelize) {
    super.init(
      {
        firstBemester: Sequelize.NUMBER,
        secondBemester: Sequelize.NUMBER,
        thirdBemester: Sequelize.NUMBER,
        fourthBemester: Sequelize.NUMBER,
        finalScore: {
          type: Sequelize.VIRTUAL,
          get() {
            return (
              this.firstBemester +
              this.secondBemester +
              this.thirdBemester +
              this.fourthBemester
            );
          },
        },
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
export default Score;
