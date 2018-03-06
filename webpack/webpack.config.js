var webpack = require('webpack');
var path    = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		path.join(__dirname, '../app/index.js')
	],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.css$/,
				loaders: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	plugins: []
}
