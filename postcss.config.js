module.exports = {
    plugins: [
        require('autoprefixer')({
            flexbox:true
        }),
        require('postcss-import'),
        require('postcss-preset-env')({
            stage:4,
        }),
        require('postcss-nested')
        
    ],
};
