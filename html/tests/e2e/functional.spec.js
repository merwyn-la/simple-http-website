import {test, expect} from '@playwright/test';

test.describe('Simple Navigation and Click', () => {
  test('Can navigate to "Contact Us" from the Homepage', async ({page}) => {
    await page.goto('http://localhost:8080');
    await page.click("body > main > nav > ul > li:nth-child(3) > a")
    await expect(page).toHaveURL("http://localhost:8080/contact-us.html")
  });
})