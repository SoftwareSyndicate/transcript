var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CordovaPlugin = require('webpack-cordova-plugin');
var path = require('path');

var PATH = './static';
if (process.env.NODE_ENV === 'production') {
  PATH = './dist';
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: PATH,
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|src\/libs|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader'
      }
    ]
  },
  vue: {
    loaders: {
      scss: 'vue-style!css!sass'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      components: 'src/components',
      base: 'src/components/base',
      pages: 'src/components/pages',
      filters: 'src/filters',
      libs: 'src/libs',
      models: 'src/RMS/src/models',
      services: 'src/RMS/src/services',
      styles: 'src/styles',
      sbpStyles: 'src/styles',
      images: 'images',
      rms: 'src/RMS',
      'rms-models': 'src/RMS/src/models',
      'rms-services': 'src/RMS/src/services',
      'rms-components': 'src/RMS/src/components'
    },
    extensions: ['', '.js', '.vue', '.scss', '.svg', '.png']
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebpackPlugin([
      {from: 'images', to: 'images'}
    ]),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
