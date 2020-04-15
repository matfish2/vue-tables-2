var path = require('path')
var webpack = require('webpack')
var env = process.env.NODE_ENV;
console.log(env);
module.exports = {
  mode: env==='production' ? env : 'development',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: env==='production'?'vue-tables-2.min.js':'vue-tables.js',
    libraryTarget:'var',
    library:'VueTables'
  },
  resolve:{
    extensions: [".js",".jsx"]
  },
  optimization: {
    minimize: env==='production'
  },
  externals: {
    'vue': 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: { plugins: ['transform-vue-jsx'] },
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  }
}

if (env==='production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    //  new webpack.IgnorePlugin(/^vue$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])

}
