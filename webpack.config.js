const path = require('path');

const configuration = {
    entry: './react/index.js',
    mode: 'development',
    module: {
        rules: [
                {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        port: 8000,
        hot: true
    }
}   

module.exports = configuration;