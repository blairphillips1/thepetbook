import { Page, expect } from '@playwright/test';

/**
 * Describes the on page declaration component
 * allows user to confirm statements so they can proceed in the journey
 * @param page - Page provides methods to interact with a single tab in a browser
 * @returns
 */
export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyCopy() {
    await expect(
      this.page.getByRole('heading', {
        name: 'The Petbook',
        exact: true,
      })
    ).toHaveText('The Petbook');
  }
}
