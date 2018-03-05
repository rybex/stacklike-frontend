const config  = require('./webpack.config.js');
var webpack 	= require('webpack');
var path    	= require('path');

var parentDir = path.join(__dirname, '../app/');

config.devServer = {
	contentBase: parentDir,
	historyApiFallback: true
};

config.plugins.push(
	new webpack.DefinePlugin({
		'process.env': {
			'API_URL': JSON.stringify('http://localhost:3000')
		}
	}),
);

module.exports = config;
