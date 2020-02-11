module.exports = {

  // devServer: {
  //   proxy: { 
  //     '/sendMail': { 
  //       target: 'http://localhost:3000/sendMail',
  //       changeOrigin: true, 
  //       pathRewrite: { 
  //         '^/sendMail': ''
  //       } 
  //     } 
  //   } 
  // },
  publicPath: '',
  outputDir: '/release',

  "transpileDependencies": [
    "vuetify"
  ]
}