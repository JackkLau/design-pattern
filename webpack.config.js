const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  plugins: [
    new webpack.BannerPlugin('设计模式实例'),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  resolve: {
    //查找module的话从这里开始查找
    roots:[ path.resolve(__dirname, 'src')], //绝对路径
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['.js', '.json', '.ts']
  },

  devServer: {
    contentBase: './public',
    // 指定额外的静态资源路径,可以是一个字符串或者一个数组
    // 因为在开发阶段我们一般不会去打包public、images等静态资源目录,只有在上线前才会去将其打包,所以在这里配置一下，如果output中配置了publicPath属性，一定要注释掉publicPath，不然会加载不出图片等静态资源
  },
};
