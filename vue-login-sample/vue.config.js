module.exports = {

  devServer: {
    proxy: { 
      '/login/signin': { 
        target: 'http://localhost:3000/login/signin',
        changeOrigin: true, 
        pathRewrite: { 
          '^/login/signin': ''
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