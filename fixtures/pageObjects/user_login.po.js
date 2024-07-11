const {expect} = require("@playwright/test");
exports.UserLoginPage = class UserLoginPage{
    constructor(page){
        this.page = page;
        this.usernameInput = '[placeholder="Email"]';
        this.passwordInput= '[placeholder="Password"]';
        this.loginButton = 'submit';
    }
    async login(username,password){
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
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
    async contactEdit(){
        await this.page.locator(this.editCreated).click();
        await this.page.locator(this.editContact).click();
        await this.page.locator(this.FirstName).fill("Hello");
        await this.page.locator(this.LastName).fill("World");
        await this.page.locator(this.submit).click();

    }
    async deleteContact(){
        await this.page.locator(this.editCreated).click();
        await this.page.locator(this.deleteContact).click();
       
    }
}