module.exports = (app) => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Permission = app.model.define('permission', {
    // name: STRING,
    // action: STRING, // 权限对应的动作，如 'read', 'write'
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
    action: {
      type: STRING(100),
      allowNull: false,
      defaultValue: '',
      comment: '操作权限',
    },
    created_time: DATE,
    updated_time: DATE,
  })

  Permission.associate = function () {
    Permission.belongsToMany(app.model.Role, {
      through: 'role_permission',
      foreignKey: 'permission_id',
      as: 'role',
    })
  }

  return Permission
}
