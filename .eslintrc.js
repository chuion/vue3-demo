module.exports = {
    root: true,
  
    env: {
      node: true
    },
  
    extends: ['plugin:vue/recommended'],
  
    rules: {
      "comma-dangle": ["error", "never"]
    },
  
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
  
    overrides: [
      {
        files: ['**/__tests__/*.{j,t}s?(x)'],
        env: {
          jest: true
        }
      }
    ]
  }