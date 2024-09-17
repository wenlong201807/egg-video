module.exports = (app) => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Role = app.model.define('role', {
    // name: STRING,
    id: {
      type: INTEGER(20),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
      comment: '角色名称',
    },
    created_time: DATE,
    updated_time: DATE,
  })

  Role.associate = function () {
    Role.belongsToMany(app.model.User, {
      through: 'user_role',
      foreignKey: 'role_id',
      as: 'user',
    })
    Role.belongsToMany(app.model.Permission, {
      through: 'role_permission',
      foreignKey: 'role_id',
      as: 'permission',
    })
  }

  return Role
}
