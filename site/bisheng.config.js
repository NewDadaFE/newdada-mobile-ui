module.exports = {
    source: [
        './docs',
    ], // makerdown 原文件目录
    output: './_site', // 输出文件
    lazyLoad: false,
    theme: './_theme', // 主题文件
    port: 8000,
    doraConfig: {},
    webpackConfig(config) { // webpack 配置文件
        config.externals = {
            react: 'React',
            'react-dom': 'ReactDOM',
        };
        return config;
    },

    entryName: 'index',
    root: '/',
    plugins: [ // 插件
        'bisheng-plugin-description',
    ],
    pick: {
        posts(markdownData) {
            return {
                meta: markdownData.meta,
                description: markdownData.description,
            };
        },
    },
};
