const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        background: path.resolve(__dirname, 'src/extension/background/index.ts'),
        popup: path.resolve(__dirname, 'src/extension/popup/index.ts'),
        content: path.resolve(__dirname, 'src/extension/content/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: 'assets/manifest.json'},
                {from: 'assets/popup.html'},
                {from: 'assets/images/logo.png'}
            ]
        })
    ]
};