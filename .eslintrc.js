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
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx", ".md"] }],
        'func-names': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'react/prefer-es6-class': 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-first-prop-new-line': 0,
        'no-param-reassign': 0,
        'no-return-assign': 0,
        'max-len': 0,
        'react/no-multi-comp': 0,
        'array-callback-return': 0,
        'import/no-unresolved': 0,
        'jsx-a11y/img-has-alt': 0,
        'import/no-extraneous-dependencies': 0,
        'react/no-string-refs': 0,
        'react/no-find-dom-node': 0,
        'react/require-extension': 0,
        'jsx-a11y/href-no-hash': 0,
    }
};
