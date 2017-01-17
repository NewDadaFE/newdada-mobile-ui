const path = require('path')

module.exports = {
    source: [
        './posts',
        './docs'
    ], // makerdown 原文件目录
    output: './_site', // 输出文件
    lazyLoad: false,
    theme: './site/_theme', // 主题文件
    port: 8000,
    doraConfig: { verbose: true },
    htmlTemplate: path.join(__dirname, './_theme/static/template.html'),
    webpackConfig(config) { // webpack 配置文件
        config.externals = {
            react: 'React',
            'react-dom': 'ReactDOM',
        };

        config.babel.plugins.push([
            'babel-plugin-transform-runtime',
            {
                polyfill: false,
                regenerator: true,
            },
        ])
        return config;
    },
    root: '/',
    plugins: [ // 插件
        'bisheng-plugin-description',
        'bisheng-plugin-toc?maxDepth=2',
        'bisheng-plugin-antd'
    ],
    pick: {
        docs(markdownData) {
            return {
                meta: markdownData.meta,
                description: markdownData.description,
            };
        },
        posts(markdownData) {
            return {
                meta: markdownData.meta,
                description: markdownData.description,
            };
        },
    },
};
