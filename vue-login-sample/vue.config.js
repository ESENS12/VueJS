module.exports = {

  devServer: {
    proxy: { 
      '/login/signup': { 
        target: 'http://localhost:3000/login/signup',
        changeOrigin: true, 
        pathRewrite: { 
          '^/login/signup': ''
        } 
      } 
    } 
  },
  publicPath: '',
  outputDir: '../nodejs-jwt-example/public',

  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false
}