/* 引入数据库 */
const mongoose = require('mongoose')

/* 连接数据库 */
mongoose
  .connect(
    'mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(
    (d) => {
      console.log('接口启动成功')
    }
  )
  .catch(
    (e) => {
      // console.log('接口启动失败')
      console.log(e)
    }
  )

/* 表规则 */
var Schema = mongoose.Schema

var customerSchema = new Schema ({
  date: { type: String, require: true },
  xingming: { type: String, rquire: true },
  sex: { type: String, require: true },
  iphone: { type: Number, require: true },
  idnumber: { type: Number, require: true },
  appointment: { type: String, require: true },
  gobeijing: { type: String, require: true }
})

/* 建表 */
var customers = mongoose.model('customer', customerSchema)
module.exports = customers