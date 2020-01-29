module.exports = {

  devServer: {
    proxy: { 
      '/login': { 
        target: 'http://localhost:3000/login',
        changeOrigin: true, 
        pathRewrite: { 
          '^/login': ''
        } 
      } 
    } 
  },
  publicPath: '',
  outputDir: '../nodejs-jwt-example/public',

  "transpileDependencies": [
    "vuetify"
  ]
}