const { test, expect } = require('@playwright/test');
const testData = require('../../fixtures/user_loginFixture.json');
import { UserLoginPage } from '../../fixtures/pageObjects/user_login.po.js';
test.beforeEach(async({page})=>{
    await page.goto('https://thinking-tester-contact-list.herokuapp.com/contactList');
});
test('has title', async ({ page }) => {
    await page.goto('https://thinking-tester-contact-list.herokuapp.com');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Thinking Tester/);
});
test.describe('Valid Login Tests',() => {
    test(' Login using valid username and password', async ({ page }) => {
        const addContact = new UserLoginPage(page);
        await addContact.addData(testData.validUser.username,testData.validUser.passWord);
    });
});