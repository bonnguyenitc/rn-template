module.exports = {
    root: true,
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:react-hooks/recommended',
        'plugin:react-native/all'
    ],
    parser: 'babel-eslint',
    rules: {
        strict: 0,
        'import/no-unresolved': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js']
            }
        ],
        'prettier/prettier': 'error',
        'no-param-reassign': ['error', { props: false }],
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-props-no-spreading': 'off',
        'no-unused-expressions': 'off',
        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        'global-require': 'off',
        'react/forbid-prop-types': 'off',
        'import/no-cycle': 'off'
    },
    plugins: ['prettier', 'react-native'],
    env: {
        browser: true,
        es6: true,
        'react-native/react-native': true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020,
        sourceType: 'module'
    }
};
