import { test } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import SignUpPage from '../pages/SingUpPage';
import { testData } from '../data/testData';

test.describe('Account sign up flow', () => {
  test('AccountCreation valid Scenario', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.clickOnJoin();

    const signUpPage = new SignUpPage(page);
    await signUpPage.signUp(
      testData.signupData.firstName,
      testData.signupData.lastName,
      testData.signupData.userName,
      testData.signupData.email,
      testData.signupData.password,
      testData.signupData.confirmPassword,
    );
    await signUpPage.clickLogOut();
  });
});
