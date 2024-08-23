const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [    // правило
          { 
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    esModule: true,
                  },
                },
                'css-loader',
           ],
           test: /\.css$/ 
        }]
      }
};



/*В первую очередь нам понадобятся загрузчики: style-loader и css-loader. Установим их локально с помощью: 
npm i style-loader css-loader --save-dev .
Run `npm audit` for details.
*/