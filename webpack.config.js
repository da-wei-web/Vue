const path = require("path");

module.exports = {
    entry: "./webpack1/src/main.js",
    output: {
        path: path.resolve(__dirname, "webpack1/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}