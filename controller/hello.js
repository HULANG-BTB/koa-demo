
class Hello {
  static async get(ctx) {
    ctx.body = ctx.query
  }

  static async post(ctx) {
    ctx.body = {
      body:ctx.request.body,
      query: ctx.query
    }
  }

  static async put(ctx) {
    ctx.body = {
      body:ctx.request.body,
      query: ctx.query
    }
  }

  static async delete(ctx) {
    ctx.body = {
      query: ctx.query,
      path: ctx.params
    }
  }
}

export default Hello
