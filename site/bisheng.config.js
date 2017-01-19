const path = require('path');


function pickerGenerator(module) {
    const tester = new RegExp(`^docs/${module}`);

    /* eslint-disable consistent-return */
    return (markdownData) => {
        const filename = markdownData.meta.filename;

        if (tester.test(filename) && !/\.en-US\.md/.test(filename)) {
            return {
                meta: markdownData.meta,
            };
        }
    };
  /* eslint-enable consistent-return */
}

module.exports = {
    source: [
        './docs',
        './components',
    ], // makerdown 原文件目录
    output: './_site', // 输出文件
    lazyLoad(nodePath, nodeValue) {
        if(typeof nodeValue === 'string') {
            return true;
        }

        return nodePath.endsWith('/demo');
    },
    theme: './site/_theme', // 主题文件
    port: 8000,
    doraConfig: { verbose: true },
    htmlTemplate: path.join(__dirname, './_theme/static/template.html'),
    webpackConfig(config) { // webpack 配置文件
        config.externals = {
            // react: 'React',
            // 'react-dom': 'ReactDOM',
            // 'react-router': 'ReactRouter',
            // history: 'History',
            // 'babel-polyfill': 'this', // hack babel-polyfill has no exports
        };

        config.babel.plugins.push([
            'babel-plugin-transform-runtime',
            {
                polyfill: false,
                regenerator: true,
            },
        ]);
        return config;
    },
    root: '/',
    plugins: [ // 插件
        'bisheng-plugin-description',
        'bisheng-plugin-toc?maxDepth=2',
        'bisheng-plugin-antd',
    ],
    pick: {
        'docs/vue': pickerGenerator('vue'),
        components(markdownData) {
            const filename = markdownData.meta.filename;

            if (!/^components/.test(filename) ||
                /\/demo$/.test(path.dirname(filename))) return;
                /* eslint-disable consistent-return */
            return {
                meta: markdownData.meta,
            };
            /* eslint-enable consistent-return */
        },
    },
};
