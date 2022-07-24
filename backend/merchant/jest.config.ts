import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  rootDir: "src",
  collectCoverage: true,
  testMatch: ["**/*.spec.ts"],
  transform: {
    "^.+\\.(t|j)s$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            decorators: true,
            syntax: "typescript"
          }
        }
      }
    ]
  },
  setupFiles: ["<rootDir>/../jest.setup.ts"]
};

export default config;
