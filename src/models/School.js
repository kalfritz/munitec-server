import Sequelize, { Model } from 'sequelize';

class School extends Model {
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
    this.hasMany(models.Class, {
      foreignKey: 'school_id',
      as: 'classes',
    });
  }
}
export default School;
