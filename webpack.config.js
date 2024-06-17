const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

function generateScssEntries() {
    const modulesDir = path.resolve(__dirname, 'src/scss/modules');
    const files = fs.readdirSync(modulesDir);
    const entries = {};

    files.forEach(file => {
        if (path.extname(file) === '.scss') {
            const moduleName = path.basename(file, '.scss');
            entries[`modules/${moduleName}`] = `${modulesDir}/${file}`;
        }
    });

    return entries;
}


module.exports = {
    mode: 'development',
    entry: {
        'main': ['./src/js/main.js', './src/scss/main.scss'],
        ...generateScssEntries(), // Spread the dynamically generated module entries
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/modules/[name].module.js',
        clean: true,
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            }
        ],
    },
    resolve: {
        fallback: { "path": require.resolve("path-browserify") }
    },
    plugins: [
        new RemoveEmptyScriptsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].[contenthash].css'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
