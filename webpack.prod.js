const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { DefinePlugin } = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
        'process.env.REACT_APP_FIREBASE_DB_API': JSON.stringify(process.env.REACT_APP_FIREBASE_DB_API),
        'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
        'process.env.REACT_APP_FIREBASE_DB_URL': JSON.stringify(process.env.REACT_APP_FIREBASE_DB_URL),
        'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
        'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
        'process.env.REACT_APP_FIREBASE_SENDER_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_SENDER_ID),
        'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
        'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
    })
  ]
});