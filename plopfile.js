module.exports = plop => {
  plop.setGenerator('template', {
    // 描述
    description: 'create a component',
    // 命令行交互问题
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: '文件类型',
        choices: ['Controller', 'Service', 'All']
      },
      {
        type: 'input',
        name: 'name',
        message: '类名'
      }
    ],
    // 完成命令行交互过后完成的一些动作
    actions: data => {
      const toKababCase = str => {
        const temp = str.replace(/[A-Z]/g, match => {
          return '-' + match.toLowerCase()
        })
        if (temp.slice(0, 1) === '-') {
          //如果首字母是大写，执行replace时会多一个_，这里需要去掉
          return temp.slice(1)
        }
        return temp
      }
      const actions = []
      data.directory = 'src/'
      data.filename = toKababCase(data.name)
      data.route = data.filename.toLowerCase()

      const controller = {
        type: 'add',
        path: 'controller/{{filename}}.js',
        templateFile: 'plop-templates/controller.js.hbs',
        skipIfExists: true
      }

      const service = {
        type: 'add',
        path: 'service/{{filename}}.js',
        templateFile: 'plop-templates/service.js.hbs',
        skipIfExists: true
      }

      if (data.type === 'Controller' || data.type === 'All') {
        actions.push(controller)
      }
      if (data.type === 'Service' || data.type === 'All') {
        actions.push(service)
      }
      return actions
    }
  })
}
