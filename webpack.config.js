const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // <--- 1. Добавляем это

module.exports = {
  mode: 'production',
  entry: './src/app.js', // Убедитесь, что путь верный (раз файл licenses ругался на src/app.js, значит entry правильный)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // 2. Настраиваем копирование файла лицензий
    new CopyPlugin({
      patterns: [
        { from: 'src/licenses/licenses.txt', to: 'licenses.txt' },
      ],
    }),
  ],
};