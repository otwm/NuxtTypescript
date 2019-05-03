module.exports = {
  'verbose': true,
  'moduleFileExtensions': [
    'js',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  'transform': {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  'moduleNameMapper': {
    '^vue$': 'vue/dist/vue.common.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1'
  },
  'collectCoverage': true,
  'collectCoverageFrom': [
    '**/*.{ts,tsx,vue}',
    '!**/node_modules/**'
  ],
  'snapshotSerializers': [
    'jest-serializer-vue'
  ],
  'coverageReporters': [
    'html',
    'text-summary',
    'lcov'
  ]
}
