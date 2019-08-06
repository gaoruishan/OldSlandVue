'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // 可利用该属性解决跨域的问题 将http://localhost:8080/api/index.json 改为静态可访问的http://localhost:8080/static/index.json
    proxyTable: {
      '/api': {
        // 正式接口调试改变URL
        // target: 'http://localhost:8080',
        target: 'https://gaoruishan.cn:3000/v1/',
        changeOrigin:true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../oldsland/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../oldsland'),
    assetsSubDirectory: 'static',
    // 1,APP发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。
    // 2,Web发布的根目录,如果是上线的文件，可根据文件存放位置进行更改路径 /travel/
    assetsPublicPath: './',

    /**
     * Source Maps
     */
    // 打包是否生成 .map文件
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
