module.exports = {
    mode: 'production',
    entry : './src/js/main.js',

    output : {
        filename : 'bundle.js',
        path : `${ __dirname }/dest`,
    },

    module : {
        rules : [
            {
                test : /\.vue$/,
                loader : 'vue-loader',
            },
            {
                test : /\.js$/,
                loader: 'babel-loader?presets=es2015',
            },
            {
                test : /\.(css|sass|scss)$/,
                loader : 'sass-loader',
            }
        ]
    },
    resolve : {
        extensions: ['.js', '.vue'],
        alias : {
            vue$ : 'vue/dist/vue.esm.js',
        },
    }
}