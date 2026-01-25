import type { Page, Locator } from '@playwright/test';

export default class SignUpPage {
  private page: Page;
  private firstName: Locator;
  private lastName: Locator;
  private userName: Locator;
  private email: Locator;
  private password: Locator;
  private confirmPassword: Locator;
  private consentCheckBox: Locator;
  private consentCall: Locator;
  private createAccountButton: Locator;
  private btnLogOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.getByTestId('text-input-First Name');
    this.lastName = page.getByTestId('text-input-Last Name');
    this.userName = page.getByTestId('text-input-Username');
    this.email = page.getByTestId('email-input-Email');
    this.password = page.getByTestId('password-input-Password');
    this.confirmPassword = page.getByTestId(
      'password-input-Password Confirmation',
    );
    this.consentCheckBox = page.getByTestId('consentedToTerms');
    this.consentCall = page.getByTestId('consentedToCallMessage');
    this.createAccountButton = page.locator('//span[text()="Create Account"]');
    this.btnLogOut = page.getByTestId('button-Logout');
  }

  async signUp(
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.userName.fill(userName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);
    await this.consentCheckBox.check();
    await this.consentCall.check();
    await this.createAccountButton.isEnabled();
    await this.createAccountButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickLogOut() {
    await this.btnLogOut.isEnabled();
    await this.btnLogOut.click();
  }
}
