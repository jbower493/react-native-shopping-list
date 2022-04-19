module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [0, { allow: 'always' }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'linebreak-style': 0,
        semi: ['error', 'never'],
        'no-undef': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['off'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'react/require-default-props': 'off',
    },
}
