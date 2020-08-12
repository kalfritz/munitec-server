import Sequelize, { Model } from 'sequelize';

class Subject extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING(100000),
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
  }
}
export default Subject;
