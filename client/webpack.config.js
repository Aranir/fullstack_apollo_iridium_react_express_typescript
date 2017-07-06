const path = require("path");
const webpack = require('webpack');
const fs = require('fs');


module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "public"),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: "/",
        compress: true,
        port: 3000
    }
};