const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    // slower but ensure production optimized build
    mode:'production',
    output :{
        // contenthash resolves caching issue
      filename: '[name].[contenthash].js',
      publicPath: '/auth/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'auth',
            filename:'remoteEntry.js',
            exposes:{
                './AuthApp':'./src/bootstrap.js'
            },
            shared: packageJson.dependencies
        })
    ]
}


module.exports= merge(commonConfig,prodConfig);