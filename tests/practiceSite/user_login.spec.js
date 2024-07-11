const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/user_loginFixture.json');
import { UserLoginPage } from '../../fixtures/pageObjects/user_login.po.js';
test('has title', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Thinking Tester/);
});
test.describe('Add contact data',() => {
    test(' Adding correct and valid data', async ({ page }) => {
        const addContact = new UserLoginPage(page);
        await login.login(testData.validUser.username,testData.validUser.passWord);
    });
});
test.afterEach(async ({page})=>{
    await page.close();
});