module.exports = {
  testRegex: '.*.spec.(js|ts|tsx)?$',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
    'json',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.nuxt/',
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/store/**/*.ts',
    '**/layouts/**/*.vue',
    '**/pages/**/*.vue',
    '**/components/**/*.vue',
    '**/plugins/**/*.ts',
  ],
}
