var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].entry.js'
    },
};