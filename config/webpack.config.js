var glob = require('glob');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';
  return {
    entry: glob
      .sync('./src/*.js')
      .concat('./config/resources.js')
      .concat('./index.html')
      .concat(glob.sync('./assets/scss/*.scss')),

    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '/../dist')
    },

    mode: 'development',

    module: {
      rules: [
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader'
            }
          ]
        },
        {
          test: /\.jpg$/,
          use: ['file-loader']
        },
        {
          test: /\.png$/,
          use: ['url-loader?mimetype=image/png']
        },

        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'main.css'
        // Default optison:
        // filename: devMode ? '[name].css' : '[name].[hash].css',
        // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      }),
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
  };
};
