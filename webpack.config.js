const path = require('path');
const Dotnev = require('dotenv-webpack');
const { DefinePlugin } = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        historyApiFallback: true
    },
    plugins: [
        new Dotnev({
            path: './.env',
            safe: true
        })
        // new DefinePlugin({
        //     'process.env.REACT_APP_FIREBASE_DB_API': JSON.stringify(process.env.REACT_APP_FIREBASE_DB_API),
        //     'process.env.REACT_APP_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
        //     'process.env.REACT_APP_FIREBASE_DB_URL': JSON.stringify(process.env.REACT_APP_FIREBASE_DB_URL),
        //     'process.env.REACT_APP_FIREBASE_PROJECT_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
        //     'process.env.REACT_APP_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
        //     'process.env.REACT_APP_FIREBASE_SENDER_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_SENDER_ID),
        //     'process.env.REACT_APP_FIREBASE_APP_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
        //     'process.env.REACT_APP_FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID)
        // })
    ]
}