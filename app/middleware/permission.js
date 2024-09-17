module.exports = () => {
  return async function permission(ctx, next) {
    const { userId } = ctx.session // 假设用户 ID 存储在 session 中
    const user = await ctx.model.User.findByPk(userId, {
      include: {
        model: ctx.model.Role,
        include: {
          model: ctx.model.Permission,
        },
      },
    })

    if (!user) {
      ctx.throw(403, 'User not found')
    }

    const permissions = user.roles.reduce((acc, role) => {
      return acc.concat(role.permissions.map((permission) => permission.action))
    }, [])

    // 假设当前请求需要 'read' 权限
    if (!permissions.includes('read')) {
      ctx.throw(403, 'No permission')
    }

    await next()
  }
}
