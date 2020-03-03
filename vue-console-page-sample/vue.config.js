module.exports = {
  
  productionSourceMap: false,
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
  outputDir: '../console_backend/public',

    "transpileDependencies": [
      "vuetify"
    ],
}