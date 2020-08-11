import Sequelize, { Model } from 'sequelize';

class Score extends Model {
  static init(sequelize) {
    super.init(
      {
        firstBemester: Sequelize.FLOAT,
        secondBemester: Sequelize.FLOAT,
        thirdBemester: Sequelize.FLOAT,
        fourthBemester: Sequelize.FLOAT,
        finalScore: {
          type: Sequelize.VIRTUAL,
          get() {
            let totalScore = 0;
            let totalBemesters = 0;
            if (this.firstBemester) {
              totalScore += this.firstBemester;
              totalBemesters++;
            }
            if (this.secondBemester) {
              totalScore += this.secondBemester;
              totalBemesters++;
            }
            if (this.thirdBemester) {
              totalScore += this.thirdBemester;
              totalBemesters++;
            }
            if (this.fourthBemester) {
              totalScore += this.fourthBemester;
              totalBemesters++;
            }
            const finalScore = totalScore / totalBemesters;
            return finalScore;
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
