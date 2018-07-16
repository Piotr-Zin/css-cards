var glob = require('glob');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';
  return {
    entry: glob
      .sync('./src/*.js')
      .concat('./index.html')
      .concat(glob.sync('./assets/scss/*.scss')),
      
    output: {
      filename: './dist/bundle.js'
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
        { test: /\.jpg$/, use: ['file-loader'] },
        { test: /\.png$/, use: ['url-loader?mimetype=image/png'] },

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
        filename: './dist/main.css'
        // Default optison:
        // filename: devMode ? '[name].css' : '[name].[hash].css',
        // chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
      })
    ]
  };
};
