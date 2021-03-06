module.exports = {
    testRegex: '\\.spec\\.(ts|js)$',
    testEnvironment: 'node',
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.d.ts',
        '!src/templates/**',
        '!**/node_modules/**',
    ],
    setupFiles: [
        "<rootDir>/__test__/setup.ts",
    ]
};
