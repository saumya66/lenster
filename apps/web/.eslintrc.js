module.exports = {
  root: true,
  extends: ['weblint'],
  //dont's push this file
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  }
};
