const { test, expect } = require("@playwright/test");
const testData = require("../../fixtures/loginFixture.json");
test.beforeEach(async ({ page }) => {
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/");
  await page.locator("#email").fill(testData.editcontact.email);
  await page.locator("#password").fill(testData.editcontact.password);
  await page.locator("#submit").click();
});
test.describe("edit for contact", () => {
  test("edit contact", async ({ page }) => {
    await page.locator("#add-contact").click();
    await page.locator("#firstName").fill(testData.editcontact.firstname);
    await page.locator("#lastName").fill(testData.editcontact.lastname);
    await page.locator("#dateofBirth").fill(testData.editcontact.date_of_birth);
    await page.locator("#email").fill(testData.editcontact.email);
    await page.locator("#submit").click();
  });
}); 