// eslint.config.js
const next = require('eslint-config-next');

module.export = [
  ...next(),
  {
    ignores: ['node_modules', '.next', 'dist', 'public'],
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  },
];
