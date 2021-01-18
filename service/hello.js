import { Service } from '../lib/core/decorator'

@Service
class Hello {
  static async say() {
    return 'Hello'
  }

  static async create() {
    return await this.model.User.create({
      username: 'username',
      password: 'password'
    })
  }
}

export default Hello
