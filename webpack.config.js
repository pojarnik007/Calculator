const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const { type } = require('os')
const { Interface } = require('readline')

module.exports = (env) => {
  isDev = env.mode === 'development'

  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'Calc.[contenthash].js',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
    ],

    devServer: isDev
      ? {
          port: 5000,
          open: true,
        }
      : undefined,
  }
}
