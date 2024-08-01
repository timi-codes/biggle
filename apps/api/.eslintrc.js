/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@biggle/eslint-config/nest.js'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};