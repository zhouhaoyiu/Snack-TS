const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode:'production',
  entry: "./src/index.ts",
  devServer: {
    host:'127.0.0.1',
    port:8084
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    environment:{
      //不使用箭头
      arrowFunction:false,
      const:false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{
          loader:"babel-loader",
          options:{
            presets:[
              [
                "@babel/preset-env",
                {
                  targets:{
                    "chrome":"88"
                  },
                  "corejs":"3",
                  "useBuiltIns":"usage"
                }
              ]
            ]
          }
        },"ts-loader"],
        exclude: /node_modules/
      },
      {
        test:/\.less$/,
        use:[
          "style-loader",
          "css-loader",
          {
            loader:"postcss-loader",
            options:{
              postcssOptions:{
                plugins:[
                  [
                    "postcss-preset-env",
                    {
                      browsers:'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template:"./src/index.html"
    }
    ),
  ],
  resolve:{
    extensions:['.ts','.js']
  }
}