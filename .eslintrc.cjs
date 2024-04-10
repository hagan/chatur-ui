module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'next/core-web-vitals',
        'plugin:storybook/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-refresh'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
  }

//   {
//     "extends": [
//       "next/core-web-vitals",
//       "plugin:storybook/recommended"
//     ]
//   }
