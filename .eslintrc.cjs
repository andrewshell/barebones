module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'vite.config.js',
        ],
      },
    ],
    'import/extensions': [
      'error',
      {
        js: 'ignorePackages',
      },
    ],
  },
  settings: {
    react: {
      version: '18.2',
    },
  },
  ignorePatterns: [
    'node_modules/*',
    'dist/*',
  ],
};
