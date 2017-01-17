const enLocaleData = require('react-intl/locale-data/en')
const zhLocaleData = require('react-intl/locale-data/zh')

const enLocale = {
    locale: 'en-US',
    data: enLocaleData,
    messages: {
        'app.header.menu.home': 'Home',
        'app.header.menu.vue': 'Vue',
        'app.header.lang': '中文',
    },
};
const zhLocale = {
    locale: 'zh-CN',
    data: zhLocaleData,
    messages: {
        'app.header.menu.home': '首页',
        'app.header.menu.vue': '组件',
        'app.header.lang': 'EN',
    },
};

const contentTmpl = './template/Content/index';

module.exports = {
    home: '/',
    sitename: 'NewDadaFE',
    siteTitle: 'Mobile UI',
    github: 'https://github.com/NewDadaFE/newdada-mobile-ui',
    enLocale,
    zhLocale,
    categoryOrder: {
        Layout: 0,
        Navigation: 1,
        'Data Entry': 2,
        'Data Display': 3,
        Feedback: 4,
        Combination: 6,
        Gesture: 5,
    },
      typeOrder: {
        Layout: 0,
        Navigation: 1,
        'Data Entry': 2,
        'Data Display': 3,
        Feedback: 4,
        Gesture: 5,
        Combination: 6,
    },
    routes: {
        path: '/',
        component: './template/Layout/index',
        indexRoute: { component: './template/Home/index' },
        childRoutes: [
            {
                path: '/docs/:children',
                component: contentTmpl
            },
            {
                path: '/components/:children',
                component: contentTmpl
            },
        ],
    },
};
