module.exports = {
    source: [
        './posts',
        './docs',
    ], // makerdown 原文件目录
    lazyLoad: false,
    root: '/',
    plugins: ['bisheng-plugin-description'],
    pick: {
        posts(markdownData) {
            return {
                meta: markdownData.meta,
                description: markdownData.description
            }
        },
        docs(markdownData) {
            return {
                meta: markdownData.meta,
                description: markdownData.description
            }
        }
    }
};
//
// module.exports = {
//   lazyLoad: true,
//   root: '/bisheng-theme-one/',
//   plugins: ['bisheng-plugin-description'],
//   pick: {
//     posts(markdownData) {
//       return {
//         meta: markdownData.meta,
//         description: markdownData.description,
//       };
//     }
//   }
// };
