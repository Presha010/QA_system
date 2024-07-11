const { test, expect } = require('@playwright/test');
//const testdata = require('../../fixtures/loginFixture.json');
/*test.beforeEach(async({page})=>{
    await page.goto('/');// or ./
});*/
test('has title', async ({ page }) => {
    await page.goto('https://facebook.com');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Facebook/);
});

test(' title', async ({ page }) => {
    //await page.goto('https://facebook.com');
    await page.getByTestId('royal_login_button').click();

  
    // Expect a title "to contain" a substring.
    //await expect(page).toHaveTitle(/Facebook/);
});
test.describe('Valid Login Tests',() => {
    test(' Login using valid username and password', async ({ page }) => {
       // await page.goto('https://facebook.com');
        //await page.pause();
        await page.locator('[placeholder="Email or phone number"]').fill(testdata.validUser.userName)
        await page.locator('[placeholder="Password"]').fill(testdata.validUser.passWord)
        await page.getByTestId('royal_login_button').click();
        await expect(page.locator()).toBeVisible()
        await expect(page.locator()).toHaveText()
        // Expect a title "to contain" a substrin()g.
        //await expect(page).toHaveTitle(/Facebook/);
    });
});

test.describe('Invalid Login Tests',() => {
    test(' Login using valid username and invalid password ', async ({ page }) => {
        //await page.goto('https://facebook.com');
        await page.locator('[placeholder="Email or phone number"]').fill(testdata.validUser.userName)
        await page.locator('[placeholder="Password"]').fill(1212)
        await page.getByTestId('royal_login_button').click();
        await expect(page.locator()).toBeVisible()
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
    test(' Login using invalid username and valid password ', async ({ page }) => {
        await page.goto('https://facebook.com');
        await page.locator('[placeholder="Email or phone number"]').fill(testdata.invalidUser.userName)
        await page.locator('[placeholder="Password"]').fill(testdata.invalidUser.passWord)
        await page.getByTestId('royal_login_button').click();
        await expect(page.locator()).toBeVisible()
    
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
    test(' Login using invalid username and invalid password ', async ({ page }) => {
        //await page.goto('https://facebook.com');
        await page.locator('[placeholder="Email or phone number"]').fill(testdata.invalidUser.invalidEmail)
        await page.locator('[placeholder="Password"]').fill(testdata.invalidUser['password>20Character'])
        await page.getByTestId('royal_login_button').click();
    
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
    test(' Login using valid username or invalid password ', async ({ page }) => {
        //await page.goto('https://facebook.com');
        await page.locator('[placeholder="Email or phone number"]').fill(testdata.invalidUser.userName)
        await page.locator('[placeholder="Password"]').fill(testdata.invalidUser['password>20Character'])
        await page.getByTestId('royal_login_button').click();
    
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
    test(' Login using empty username and valid password ', async ({ page }) => {
        //await page.goto('https://facebook.com');
        await page.locator('[placeholder="Email or phone number"]').fill('')
        await page.locator('[placeholder="Password"]').fill(1212)
        await page.getByTestId('royal_login_button').click();
    
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
    test(' Login using valid username and empty password ', async ({ page }) => {
        //await page.goto('https://facebook.com');
        await page.locator('[placeholder="Email or phone number"]').fill(testdata.invalidUser.userName)
        await page.locator('[placeholder="Password"]').fill()
        await page.getByTestId('royal_login_button').click();
    
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
    test(' Login using empty username and empty password ', async ({ page }) => {
        //await page.goto('https://facebook.com');
        test.skip();
        await page.locator('[placeholder="Email or phone number"]').fill('')
        await page.locator('[placeholder="Password"]').fill()
        await page.getByTestId('royal_login_button').click();
    
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
    test(' Login button is not clickable.', async ({ page }) => {
        //await page.goto('https://facebook.com');
        test.skip();
        await page.locator('[placeholder="Email or phone number"]').fill('Presha')
        await page.locator('[placeholder="Password"]').fill(12123)
        await page.getByTestId('royal_login_button').click();
        await expect(page.locator()).toBeEnabled()
        // Expect a title "to contain" a substring.
        //await expect(page).toHaveTitle(/Facebook/);
    });
});
