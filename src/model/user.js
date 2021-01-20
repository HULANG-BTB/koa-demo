import _sequelize from 'sequelize'
const { Model, Sequelize } = _sequelize

export default class User extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          comment: '主键'
        },
        username: {
          type: DataTypes.STRING(32),
          allowNull: false,
          comment: '用户名'
        },
        password: {
          type: DataTypes.STRING(40),
          allowNull: false,
          comment: '密码'
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
          comment: '乐观锁定'
        }
      },
      {
        sequelize,
        tableName: 'user',
        timestamps: true,
        paranoid: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        version: 'version',
        deletedAt: 'delete_time',
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }]
          }
        ]
      }
    )
    return User
  }
}
