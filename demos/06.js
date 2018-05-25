const koa = require('koa')
const app = new koa()
const route = require('koa-route')

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index Page</a>'
}
const main = ctx => {
    ctx.response.body = 'Hello World';
};

app.use(route.get('/', main))
app.use(route.get('/about', about))
app.listen(3000)