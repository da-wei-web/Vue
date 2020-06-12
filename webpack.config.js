const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: "./webpack1/src/main.js",
    output: {
        path: path.resolve(__dirname, "webpack1/dist"),
        filename: "bundle.js",
        // 当图片的大小超过limit设定的值时，会用到file-loader模块，它会将图片直接打成包
        publicPath: "dist/"
    },
    resolve: {
        // alias 别名
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [
            // 打包CSS样式
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // 打包less
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            // 打包图片资源
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 图片大小小于limit值时，图片被打包成base64字符串
                            limit: 23000,
                            name: "img/[name].[hash:8].[ext]"
                        },
                        
                    }
                ]
            },
            // 将es6语法打包成es5语法
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            // 打包vue组件文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
}