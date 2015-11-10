var
  webpack = require('webpack');

module.exports = {
  target: 'web',
  debug: false,

  entry: {
    'catyamood': './src/javascripts/app'
  },
  output: {
    path: 'dist/assets/javascripts',
    filename: '[name].min.js'
  },
  resolve: {
    modulesDirectories: [
      'src/javascripts',
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};
