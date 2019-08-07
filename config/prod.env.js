'use strict'
module.exports = {
  NODE_ENV: '"production"',
  // 此处是判断你输入，如果是输入的 npm run  build -- dev 那么就赋值给 process.env.API 。如果不是直接build的，后面是正式包。
  API: process.argv.splice(2) === 'dev'?'"http://localhost:3000/"':'"https://gaoruishan.cn:3000/v1/"'
}
