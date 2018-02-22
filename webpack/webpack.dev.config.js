var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(__dirname, '../app/index.js')
	],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
	},
	devServer: {
  	contentBase: parentDir,
  	historyApiFallback: true
	}
}
