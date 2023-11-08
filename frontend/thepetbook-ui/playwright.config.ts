import { defineConfig } from '@playwright/test';

// "list" is the default reporter, if you use any other, don't forget to add it back
const defaultReporters: any['reporter'] = [['list']];

export default defineConfig({
  // ... other configuration

  // Setup recording option to enable test debugging features
  use: {
    // Setting to capture screenshot only when a test fails
    screenshot: 'only-on-failure',
    // Setting to retain traces only when a test fails
    trace: 'retain-on-failure',
  },

  // Add Argos reporter only when it runs on CI
  reporter: process.env.CI
    ? [...defaultReporters, ['@argos-ci/playwright/reporter']]
    : defaultReporters,
});
