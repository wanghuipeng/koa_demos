const path = require('path');
const serve = require('koa-static');
const koa = require('koa')
const app = new koa()

const main = serve(path.join(__dirname));
console.log(__dirname)
app.use(main);
app.listen(3000)