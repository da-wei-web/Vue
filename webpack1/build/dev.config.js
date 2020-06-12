const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config");
// 只在开发
module.exports = webpackMerge(baseConfig, {
    // 配置webpack-dev-server，本地服务器，默认端口8080
    devServer: {
        contentBase: "./webpack1/dist",
        inline: true
    }
});