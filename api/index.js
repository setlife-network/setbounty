require('@babel/polyfill')
require('@babel/register')({
    presets: [
        '@babel/preset-env'
    ]
})
require('./src/server.js')