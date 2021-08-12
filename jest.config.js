module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"], // ignora essas pastas ao rodar testes
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"], // indicar arquivo de setup
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest", // transformar todo arquivo que termina com .js .jsx .ts .tsx para uma maneira que o jest entenda
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{tsx}",
    "!src/**/_app.tsx",
    "!src/**/_document.tsx",
  ],
  coverageReporters: ["lcov", "json"],
};
