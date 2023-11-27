const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    index: './index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      chunks: ['index'],
    }),
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({    //плагин для favicon.ico
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/assets/img/icons/favicon.ico'),
    //       to: path.resolve(__dirname, 'dist/images')
    //     }
    //   ]
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new webpack.ProvidePlugin({
      Swiper: 'swiper', // делаем Swiper доступным глобально
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
        generator: {
          filename: 'docs/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(ico|png|jpg|svg|gif|webp|base64)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.(webm|mp4)$/,
        type: 'asset/resource',
        generator: {
          filename: 'videos/[name].[contenthash][ext]',
        },
      },
      {
        test: /\.mp3$/,
        type: 'asset/resource',
        generator: {
          filename: 'audios/[name].[contenthash][ext]',
        },
      },
    ]
  },
  resolve: {
    alias: {
      swiper: 'swiper/bundle',
    },
  },
  // stats: 'verbose',
};