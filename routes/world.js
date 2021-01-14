import koaRouter from 'koa-router'
import Hello from '../controller/hello'

const router = new koaRouter()

router.get('/world', Hello.get)

router.post('/world', Hello.post)

router.put('/world', Hello.put)

router.delete('/world/:var1/:var2', Hello.delete)

export default router
