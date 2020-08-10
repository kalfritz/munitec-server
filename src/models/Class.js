import Sequelize, { Model } from 'sequelize';

class Class extends Model {
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
    this.belongsTo(models.School, {
      foreignKey: 'school_id',
      as: 'school',
    });
    this.hasMany(models.Student, {
      foreignKey: 'class_id',
      as: 'students',
    });
    this.hasMany(models.Subject, {
      foreignKey: 'class_id',
      as: 'subjects',
    });
  }
}
export default Class;
