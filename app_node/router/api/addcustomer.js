const customers = require('../../db/customers')

module.exports = (req, res) => {
  var data = req.body
  console.log(req.body)

  /* 增 */
  customers
    .create({
      date: data.date,
      xingming: data.xingming,
      sex: data.sex,
      iphone: data.iphone,
      idnumber: data.idnumber,
      appointment: data.appointment,
      gobeijing: data.gobeijing
    })
    .then(
      (data) => {
        res.send({
          code: 0,
          message: '提交成功'
        })
        // console.log(data)
      }
    )
    .catch(
      (e) => {
        console.log(e)
        res.send({
          code: 1,
          message: '提交失败'
        })
      }
    )
}