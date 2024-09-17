const { Controller } = require('egg')

class RoleController extends Controller {
  // 为角色分配权限
  async assignPermission() {
    const { roleId, permissionId } = this.ctx.request.body
    const role = await this.ctx.model.Role.findByPk(roleId)
    const permission = await this.ctx.model.Permission.findByPk(permissionId)

    if (!role || !permission) {
      this.ctx.throw(404, 'Role or Permission not found')
    }

    await role.addPermission(permission)
    this.ctx.body = { message: 'Permission assigned successfully' }
  }
}

module.exports = RoleController
