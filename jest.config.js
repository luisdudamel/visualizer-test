module.exports = {
  collectCoverageFrom: [
    'src/**/*js',
    '!**/*.test.js',
    '!src/pages/*',
    '!src/utils/collections.js',
    '!src/firebase/config.js',
    '!src/mocks/*.js'
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$':
      '<rootDir>/__mocks__/fileMock.js',

    '^@/components/(.*)$': '<rootDir>/components/$1',

    '^@/src/pages/(.*)$': '<rootDir>/src/pages/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '!node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  testEnvironment: 'jest-environment-jsdom',
  globalSetup: '<rootDir>/setupEnv.js'
}
