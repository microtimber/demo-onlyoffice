/**
 * vue.config.js
 * https://cli.vuejs.org/zh/config/
 */

// 默认的接口前缀，在 .env 中设置
const apiPrefix = `^${process.env.VUE_APP_API_PREFIX}`
// Onlyoffice 接口前缀，在 .env 中设置
const onlyofficeApiPrefix = `^${process.env.VUE_APP_ONLYOFFICE_API_PREFIX}`

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: process.env.VUE_APP_PORT,
    proxy: {
      [apiPrefix]: {
        target: process.env.VUE_APP_API_SERVER,
        ws: false,
        changeOrigin: true,
        logLevel: 'debug'
      },
      [onlyofficeApiPrefix]: {
        target: process.env.VUE_APP_ONLYOFFICE_SERVER,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          [onlyofficeApiPrefix]: ''
        }
      }
    }
  },
  chainWebpack: config => {}
}
