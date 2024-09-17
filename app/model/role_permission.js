module.exports = (app) => {
  const { INTEGER, DATE } = app.Sequelize
  const RolePermission = app.model.define('rolePermission', {
    id: {
      type: INTEGER(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    role_id: {
      type: INTEGER(20).UNSIGNED,
      allowNull: false,
      comment: '角色id',
      references: {
        model: 'role',
        key: 'id',
      },
      onUpdate: 'restrict', // 更新时操作
      onDelete: 'cascade', // 删除时操作
    },
    permission_id: {
      type: INTEGER(20).UNSIGNED,
      allowNull: false,
      comment: '权限id',
      references: {
        model: 'permission',
        key: 'id',
      },
      onUpdate: 'restrict', // 更新时操作
      onDelete: 'cascade', // 删除时操作
    },
    created_time: DATE,
    updated_time: DATE,
  })

  RolePermission.associate = function (app) {
    // associations can be defined here if needed
  }

  return RolePermission
}
