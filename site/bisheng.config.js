module.exports = {
    source: './docs',
    output: './_site',
    lazyLoad: false,
    theme: './_theme',
    port: 8000,
    doraConfig: {},
    webpackConfig(config) {
        return config;
    },

    entryName: 'index',
    root: '/',
    plugins: ['bisheng-plugin-description'],
    pick: {
        posts(markdownData) {
            return {
                meta: markdownData.meta,
                description: markdownData.description,
            };
        },
    },
};
