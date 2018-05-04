var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: env.production?'vue-tables-2.min.js':'vue-tables.js',
    libraryTarget:'var',
    library:'VueTables'
  },
  externals: {
    'vue': 'Vue'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
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

if (env.production) {
  module.exports.plugins = (module.exports.plugins || []).concat([
    //  new webpack.IgnorePlugin(/^vue$/),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:false,
      output:{
        comments:false
      },
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
  
}
