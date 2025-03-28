import { defineConfig } from '@playwright/test';
import rpConfig from './reportportal.conf';

export default defineConfig({
  timeout: 2 * 60 * 1000,
  expect: { timeout: 10000 },
  fullyParallel: true,
  forbidOnly: true,
  workers: 5,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['@reportportal/agent-js-playwright', rpConfig]],
  testDir: './tests',
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
  ],
});