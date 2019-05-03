module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/indent': ["error", 2],
    'comma-dangle': ["error", {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "only-multiline"
    }],
    '@typescript-eslint/no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}