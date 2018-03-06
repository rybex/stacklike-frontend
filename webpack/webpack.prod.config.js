const config  = require('./webpack.config.js');
const webpack = require('webpack');

config.plugins.push(
  new webpack.DefinePlugin({
    'API_URL': JSON.stringify('https://stacklike-backend.herokuapp.com'),
    'REDIRECT_URL': JSON.stringify('https://stacklike-frontend.herokuapp.com')
  })
);

module.exports = config;
