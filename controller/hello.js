import { Controller, GetMapping, PostMapping, PutMapping, DeleteMapping  } from '../lib/core/decorator'

@Controller
class Hello {

  // static prefix = '/'

  @GetMapping('/hello')
  static async get(ctx) {
    ctx.body = ctx.query
  }

  @PostMapping('/hello')
  static async post(ctx) {
    ctx.body = {
      body:ctx.request.body,
      query: ctx.query
    }
  }

  @PutMapping('/hello')
  static async put(ctx) {
    ctx.body = {
      body:ctx.request.body,
      query: ctx.query
    }
  }

  @DeleteMapping('/hello/:var1/:var2')
  static async delete(ctx) {
    ctx.body = {
      query: ctx.query,
      path: ctx.params
    }
  }
}

export default Hello
