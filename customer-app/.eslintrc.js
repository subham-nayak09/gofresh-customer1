module.exports = {
    parser: 'babel-eslint',            // JS parser
    plugins: ['react'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'prettier'
    ],
    settings: { react: { version: 'detect' } },
    env: { browser: true, es2021: true, node: true },
    rules: {
      'react/prop-types': 'off',       // if you’re not using PropTypes, you can also add prop-types lib
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  };
  