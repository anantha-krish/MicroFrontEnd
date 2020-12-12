const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    // slower but ensure production optimized build
    mode:'production',
    output :{
        // contenthash resolves caching issue
      filename: '[name].[contenthash].js',
      //its required while accessing objects from s3
      publicPath: '/container/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes: {
                marketing : `marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}


module.exports= merge(commonConfig,prodConfig);