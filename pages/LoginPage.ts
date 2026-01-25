import type { Page, Locator } from '@playwright/test';

export default class LoginPage {
  private page: Page;
  private joinRealLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.joinRealLink = page.getByText('Join Real');
  }

  async navigate() {
    await this.page.goto('https://bolt.playrealbrokerage.com/login');
    await this.page.waitForLoadState('networkidle');
  }

  async clickOnJoin() {
    await this.joinRealLink.click();
    await this.page.waitForLoadState('networkidle');
  }
}
