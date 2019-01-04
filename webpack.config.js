const path = require('path')

const absolutePath = path.join(__dirname, 'public')

module.exports = {
    entry: './src/app.js',
    output: {
        path: absolutePath,
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/, //checking if files end in .js, only then will we run them through babel.
            exclude: /node_modules/ //tells webpack to ignore the files in node_modules and not run them through babel.
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: absolutePath
    },
    mode: 'development'
}
