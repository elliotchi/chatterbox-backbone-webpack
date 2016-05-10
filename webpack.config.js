const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      Backbone: 'backbone',
      _: 'underscore'
    })
  ]
}