import koaRouter from 'koa-router'
import Hello from '../controller/hello'

const router = new koaRouter()

router.get('/hello', Hello.get)

router.post('/hello', Hello.post)

router.put('/hello', Hello.put)

router.delete('/hello/:var1/:var2', Hello.delete)

export default router
