module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'object-curly-spacing': 'off',
    'indent': 'off',
    'no-unused-vars': 'off',
    'arrow-parens': 'off'
  }
}
