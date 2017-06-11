var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
    //,demo:'./examples/index.js'
  },
  output: {
    path: 'build',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','stage-0','react']
      }
    },
    {
      test: /\.css$/,
      loaders: ['style', 'css']
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'url?limit=10000&name=img/[hash:8].[name].[ext]', // 图片小于8k就转化为 base64, 或者单独作为文件
        'image-webpack' // 图片压缩
      ]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './examples/index.html',
    chunks: ['demo'],
    inject: 'body'
  })]
};
