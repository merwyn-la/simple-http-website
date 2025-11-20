import {test, expect} from '@playwright/test';
import { levelSetup } from '@level-ci/a11y-playwright';
const { levelAnalyze } = require('@level-ci/a11y-playwright') 


test.describe('Simple Navigation and Click', () => {
 test.beforeAll(async () => {
  levelSetup({
   reportPath: './level-ci-reports'
  });
 });
  test('Can navigate to "Contact Us" from the Homepage', async ({page}) => {
    await page.goto('http://localhost:8080');
    await levelAnalyze(page)
    await page.click("body > main > nav > ul > li:nth-child(3) > a")
    await expect(page).toHaveURL("http://localhost:8080/contact-us.html")
    await levelAnalyze(page)
  });
})
