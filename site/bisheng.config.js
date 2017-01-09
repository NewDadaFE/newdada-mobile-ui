module.exports = {
  source: '../docs',
  output: '../_site',
  lazyLoad: false,
  theme: '../_theme',
  port: 8000,
  lazyLoad: false,
  plugins: [],
  doraConfig: {},
  webpackConfig(config) {
    return config;
  },

  entryName: 'index',
  root: '/',
};
};
