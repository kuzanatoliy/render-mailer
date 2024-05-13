// eslint-disable-next-line no-undef
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.(js|ts|jsx|tsx)'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/config',
    'src/types',
    'src/mock-data',
    'index.(js|ts|jsx|tsx)',
  ],
};
