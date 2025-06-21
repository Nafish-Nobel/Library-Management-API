import eslintPluginNode from 'eslint-plugin-n';
import eslintPluginImport from 'eslint-plugin-import';

export default [
    {
        ignores: ['dist/**', 'node_modules/**'],
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
        plugins: {
            n: eslintPluginNode,
            import: eslintPluginImport,
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'import/order': ['warn', { 'newlines-between': 'always' }],
            'n/no-missing-import': 'error',
        },
    },
];