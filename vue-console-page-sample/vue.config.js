module.exports = {

  devServer: {
    proxy: { 
      '/sendMail': { 
        target: 'http://localhost:3000/sendMail',
        changeOrigin: true, 
        pathRewrite: { 
          '^/sendMail': ''
        } 
      },
      '/sendMailOk': { 
        target: 'http://localhost:3000/sendMailOk',
        changeOrigin: true, 
        pathRewrite: { 
          '^/sendMailOk': ''
        } 
      }  
    } 
  },
  publicPath: '',
  outputDir: '../nodejs-mailer-sample/public',

    "transpileDependencies": [
      "vuetify"
    ]
}