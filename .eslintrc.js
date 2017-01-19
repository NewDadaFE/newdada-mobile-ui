module.exports = {
    extends: ['impression'],
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true,
        experimentalObjectRestSpread: true,
      },
    },
    plugins: [
      'markdown',
      'react',
      'babel',
    ],
    rules: {
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};
