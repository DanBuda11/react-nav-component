var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./app/scripts/entry.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: [ "style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{ test: /\.png$/, loader: "url-loader?limit=100000" },
			{ test: /\.jpg$/, loader: "file-loader" }
		]
	},
	devtool: "source-map",
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}