
const { resolve } = require('path') // maybe need it?


module.exports = {
  entry: [
    './app/main.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, './app'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
