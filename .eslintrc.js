const path = require('path');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'default-param-last': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'react/no-array-index-key': 'warn',
    'no-unused-vars': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', path.resolve(__dirname, 'src/components')],
          ['@containers', path.resolve(__dirname, 'src/containers')],
          ['@actions', path.resolve(__dirname, 'src/redux/actions')],
          ['@reducers', path.resolve(__dirname, 'src/redux/reducers')],
          ['@hooks', path.resolve(__dirname, 'src/hooks')],
          ['@styles', path.resolve(__dirname, 'src/styles')],
          ['@pages', path.resolve(__dirname, 'src/pages')],
          ['@images', path.resolve(__dirname, 'src/images')],
        ],
        extensions: ['.js', '.jsx', '.css'],
      },
    },
  },
};
