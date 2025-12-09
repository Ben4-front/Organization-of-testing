const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // Убираем Warning, задавая режим явно
  mode: 'production', 
  
  entry: './src/js/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // Очищать папку dist перед сборкой
    clean: true,
    // Настройка для картинок (куда их класть в dist)
    assetModuleFilename: 'images/[name][ext]',
  },
  
  module: {
    rules: [
      // 1. Правило для JavaScript (Babel)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // 2. Правило для CSS
      // Позволяет импортировать 'file.css' в JS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 3. Правило для Картинок (PNG, SVG, JPG, GIF)
      // Webpack 5 имеет встроенный Asset Modules, loader больше не нужен
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
  ],
};