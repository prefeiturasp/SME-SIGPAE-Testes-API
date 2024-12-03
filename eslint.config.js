import cypressPlugin from 'eslint-plugin-cypress'
import globals from 'globals'

export default [
  {
    ignores: ['node_modules/**', 'eslint.config.js']
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      cypress: cypressPlugin
    },
    rules: {
      indent: ['error', 'tab'],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'no-console': 'warn'
    }
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        'cy': true,
        'Cypress': true
      }
    }
  },
  {
    files: ['cypress.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        'require': true,
        'module': true
      }
    }
  }
]
