var webpack = require('webpack');
var path = require('path');
console.log(11111, process.env.NODE_ENV)
module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "js/[name].js",
  },
  plugins: [
    new webpack.DefinePlugin({
      SOMETHINE: JSON.stringify('This is something we needed.'),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    })
  ],
  optimization: {
    nodeEnv: false
  }
};
