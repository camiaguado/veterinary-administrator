module.exports = {
    root: true,
    plugins: ['eslint-plugin-cypress'],
    extends: ['kencdodds', 'kentcdodds/import', 'plugin:cypress/recommended'],
    env: { 'cypress/globals': true }
}