const path = require('path');

module.exports = {
    entry: {
        background: path.resolve(__dirname, 'src/extension/background/index.ts'),
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
    }
};