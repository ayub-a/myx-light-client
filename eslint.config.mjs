import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
    // JS rules
    {
        files: ['**/*.{js,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-unused-vars': 'error',
            'no-undef': 'off',
            'no-redeclare': 'off',
        },
    },
    // TS rules
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/ban-ts-comment': 0,
        },
    },
    // React rules
    {
        files: ['**/*.{js,ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooks,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/display-name': 'off',
            'react-hooks/exhaustive-deps': 'off',
        },
    },
    // Prettier with Eslint
    {
        files: ['**/*.{mjs,js,ts,tsx}'],
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierConfig.rules, // Turn off conflict rules with Eslint
            'prettier/prettier': [
                'warn',
                {
                    tabWidth: 4,
                    singleQuote: true,
                    semi: false,
                    trailingComma: 'es5',
                    printWidth: 80,
                    arrowParens: 'always',
                },
            ],
        },
    },
]
