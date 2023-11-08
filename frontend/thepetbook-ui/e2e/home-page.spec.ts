import { test } from '@playwright/test';
import { HomePage } from './models/home-page';
import { argosScreenshot } from '@argos-ci/playwright';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should contain correct text content on home page', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.verifyCopy();
    await argosScreenshot(page, 'homepage');
  });
});
