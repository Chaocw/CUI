// https://jestjs.io/docs/en/configuration.html
const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  reporters: ['jest-junit'],
  collectCoverage: true,
  collectCoverageFrom: ["{lib,include}/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
})
