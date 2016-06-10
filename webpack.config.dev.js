var WebpackNotifier = require('webpack-notifier');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './built',
    filename: 'webpack-dev-build.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ["react"]
      }
    }]
  },
  plugins: [
    new WebpackNotifier()
  ]
}
