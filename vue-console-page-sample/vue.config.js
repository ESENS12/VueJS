module.exports = {

  devServer: {
    proxy: { 
      '/sendMail': { 
        target: 'http://localhost:3000/sendMail',
        changeOrigin: true, 
        pathRewrite: { 
          '^/sendMail': ''
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