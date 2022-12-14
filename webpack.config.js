const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { WebpackManifestPlugin } = require("webpack-manifest-plugin")

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                // test: /\.(s*)css$/,
                // exclude: /node_modules/,
                // use: [
                //     {
                //         loader: "sass-loader",
                //         options: {
                //             options: { outputPath: 'dist', name: '[name].min.css' }
                //         }
                //     }, 'css-loader', 'sass-loader'
                // ],
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // options: {
                    //     options: { outputPath: 'dist', name: '[name].min.css' }
                    // }
                    "css-loader",
                    "sass-loader"
                ]
            },
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|webp)$/i,
                type: 'asset/resource'
            }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name][contenthash].css",
            chunkFilename: "[id][contenthash].css"
        }),
        new WebpackManifestPlugin(),
        // new WebpackBundleAnalyzer()
    ]
}

