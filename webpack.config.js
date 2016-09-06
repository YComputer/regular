module.exports = {
    entry: "./app.js",
    output: {
        filename: "app-bundle.js"
    },
    module: {
        loaders:[
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query:{
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    }
}