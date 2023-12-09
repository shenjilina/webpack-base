/*
 * @Author: shenjilin-home
 * @Date: 2023-11-24 21:26:06
 * @LastEditors: shenjilin-home
 * @LastEditTime: 2023-11-25 10:14:13
 * @Description: 
 */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	// mode: "production",
	entry: "./src/index.js",
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	// devtool: 'eval',
	devtool: 'source-map',
	// devtool: 'inline-source-map',
	// devtool: 'cheap-module-source-map',
	devServer: {
		hot: true,
		open: false,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ["vue-loader"],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			templateContent: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Webpack App1</title>
        </head>
        <body>
          <div id="mainapp"></div>
        </body>
      </html>
      `,
		}),
	],
};
