const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
// 生产
module.exports = webpackMerge(baseConfig, {
    plugins: [
        // 丑化插件 开发时用不到
        new UglifyJsPlugin()
    ]
});