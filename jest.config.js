module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  testMatch: [
    '**/*.spec.ts',
    '**/*.test.ts'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
