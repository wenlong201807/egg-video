module.exports = (app) => {
  const { INTEGER, DATE } = app.Sequelize
  const UserRole = app.model.define('user_role', {
    id: {
      type: INTEGER(20).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: INTEGER(20).UNSIGNED,
      allowNull: false,
      comment: '用户id',
      references: {
        model: 'user',
        key: 'id',
      },
      onUpdate: 'restrict', // 更新时操作
      onDelete: 'cascade', // 删除时操作
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
    created_time: DATE,
    updated_time: DATE,
  })

  return UserRole
}
