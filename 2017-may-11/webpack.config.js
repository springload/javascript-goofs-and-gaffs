const path = require('path');
const FlowPlugin = require('flow-webpack-plugin');

const src = path.resolve('./src');
const build = path.resolve('./build');

/**
 * Base Webpack config, defining how our code should compile.
 */
module.exports = {
    entry: {
        site: [
            path.join(src, 'index.js'),
        ],
    },

    output: {
        path: build,
        filename: '[name].js',
    },

    plugins: [
        new FlowPlugin({ failOnError: true }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [
                    /node_modules/,
                    'src/classes' // excluded so we can export real ES2015 classes
                ],
            },
        ],
    },

    
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
};
