const express =  require('express')
const path = require('path')
const http = require('http')
const cors = require('cors')

var app = express()

const server = http.createServer((req, res) => {
  /* 响应头 */
  res.setHeader('Access-Control-Allow-Origin', "*")

  /* 请求路径 */
  var pathname = url.parse(req.url).pathname
  var query = url.parse(req.url, true).query

  /* 关闭node.js默认访问favicon.ico */
  if (!pathname.indexOf('/favicon.icco')) {
    return
  }
  /* 路由处理 */
  route (handle, pathname, res)
})

/* 监听8990端口 */
app.listen(8990, () => { console.log('服务器启动......') })

/* 中间件 */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors()) /* 跨域 */

/* 路由监听 */
app.post('/addcustomers', require('./router/api/addcustomer')) /* 顾客登记 */