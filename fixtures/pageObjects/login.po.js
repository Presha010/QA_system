const {expect} = require("@playwright/test");
exports.LoginPage = class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = '[placeholder="Email or phone number"]';
        this.passwordInput= '[placeholder="Password"]';
        this.loginButton = 'royal_login_button';
    }
    async login(username,password){
        await this.page.locator(this.usernameInput).fill(userName);
        await this.page.locator(this.passwordInput).fill(passWord);
        await this.page.locator(this.loginButton).click();
    }
    async verifyUsernameEmptyFields(){
        const verifyEmptyUsername = await this.page.locator(this.userNameEmptyFields);
        await expect (verifyEmptyUsername).toHaveText('Username is required');
    }
    async verifyPasswordEmptyFields(){
        const verifyEmptyPassword = await this.page.locator(this.passwordEmptyFields);
        await expect (verifyEmptyPassword).toHaveText('Password is required');
    }
}