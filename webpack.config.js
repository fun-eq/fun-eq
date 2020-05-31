const path = require('path')

module.exports = {
    watch: true,
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'docs')
    }
}