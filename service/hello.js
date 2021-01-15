import { Service } from '../lib/core/decorator'

@Service
class Hello {
  static async say() {
    return 'Hello'
  }
}

export default Hello
