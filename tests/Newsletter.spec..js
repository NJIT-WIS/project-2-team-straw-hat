// Import the Playwright configuration
import config from "../playwright.config.js";
import { test, expect } from "@playwright/test";
const { chromium } = require('playwright');

test.describe("Subscribe_newsletter", () => {
 let page;


 test.beforeEach(async () => {
  const browser = await chromium.launch();
   page = await browser.newPage();
   await page.goto(config.use.baseURL);
   await page.setViewportSize({ width: 1280, height: 800 });
 });


 test.afterEach(async () => {
   await page.close();
 });


 test("Check for subscribe field in footer", async () => {
   const labelElements = await page.$$("#subcribe_newsletter");
   expect(labelElements).toBeTruthy();
 });
});
