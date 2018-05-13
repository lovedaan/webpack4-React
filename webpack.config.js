const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// 开发环境：development，生成环境：production
const ENV = process.env.NODE_ENV;
const publicPath = '';
const baseConfig = {
    mode: ENV,
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].js',
        publicPath: publicPath
    },
    resolve: {
        extensions: [".js", ".css", ".jsx", ".json"],
        alias: {
            'components': path.resolve(__dirname, 'src/components'),
            'common': path.resolve(__dirname, 'src/common')
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: /src/, // 只转化src目录下的js
            exclude: /node_modules/, // 排除掉node_modules，优化打包速度
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};

if (ENV === 'production') {
    //生产环境
    baseConfig.output.chunkFilename = "js/[name].js";
    baseConfig.module.rules = (baseConfig.module.rules || []).concat([{
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "less-loader",
            "postcss-loader"
        ]
    }]);
    baseConfig.plugins = (baseConfig.plugins || []).concat([
        new CleanWebpackPlugin('dist/'),
        new webpack.DllReferencePlugin({
            manifest: require('./dll/react.manifest.json')
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new AddAssetHtmlPlugin([{
            filepath: './dll/react.dll.js',
            publicPath: publicPath + 'js/',
            outputPath: './js/',
            hash: true,
            includeSourcemap: false
        }])
    ]);
    //提取公共代码
    baseConfig.optimization = {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "initial",
                    name: "common",
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0
                },
                utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
                    chunks: 'initial',
                    name: 'vendor', // 任意命名
                    minSize: 0 // 只要超出0字节就生成一个新包
                }
            }
        }
    };
} else {
    //开发环境
    /*
        devtool 开启调试代码
        eval: 速度最快，是能看出是什么文件第几行输出的，查看的是打包后的代码
        source-map: 速度一般， 能定位到源文件没被编译前的文件
     */
    //baseConfig.devtool = 'eval';
    baseConfig.devtool = 'source-map';
    baseConfig.devServer = {
        contentBase: path.resolve(__dirname, "dist/"),
        compress: true,
        port: 8000,
        open: true,
        hot: true,
        watchContentBase: true,
        proxy: {
            '/api': {
                target: 'http://api.douban.com/v2/movie',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            }
        }
    };
    baseConfig.module.rules = (baseConfig.module.rules || []).concat([{
        test: /\.css$/,
        use: [{
            loader: 'style-loader',
            options: {
                sourceMap: true
            }
        }, {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        }, {
            loader: 'less-loader',
            options: {
                sourceMap: true
            }
        }, {
            loader: 'postcss-loader',
            options: {
                sourceMap: true
            }
        }]
    }]);
    baseConfig.plugins = (baseConfig.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]);
}

module.exports = baseConfig;