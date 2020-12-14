const {merge} = require ('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
//imported for shared dependecy config
const packageJson = require('../package.json')

const devConfig ={
    mode: 'development',
    output:{
        publicPath: 'http://localhost:8082/'
    },
    devServer:{
        port:8082,
        //used for navigation
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'auth',
            filename:'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap.js'
            },
            /* Shortcut method to ensure single copy 
            No need to update shared Dependecy list, everytime
            new dependecy is added
            But its better if you can specify the package to share,
            but then you have to update it evrytime new dependency added.
            */
            shared: packageJson.dependencies
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
// mentioning dev config allows to override common conconfig.
module.exports = merge(commonConfig,devConfig)