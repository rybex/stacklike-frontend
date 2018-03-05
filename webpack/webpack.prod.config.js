const config  = require('./webpack.config.js');
const webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'API_URL': JSON.stringify('https://stacklike-backend.herokuapp.com')
    }
  })
);

module.exports = config;
