/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig, devices } from '@playwright/test';

// "list" is the default reporter, if you use any other, don't forget to add it back
const defaultReporters: any['reporter'] = [['html']];

export default defineConfig({
  // ... other configuration
  testDir: './e2e',
  fullyParallel: true,

  // Setup recording option to enable test debugging features
  use: {
    // Setting to capture screenshot only when a test fails
    screenshot: 'on',
    // Setting to retain traces only when a test fails
    trace: 'retain-on-failure',
    baseURL: 'http://localhost:3000',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    // reuseExistingServer: !process.env.CI,
  },

  // Add Argos reporter only when it runs on CI
  reporter: process.env.CI
    ? [...defaultReporters, ['@argos-ci/playwright/reporter']] // whe might need to install this?
    : defaultReporters,
});
