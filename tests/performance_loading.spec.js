import config from "../playwright.config.js";
import { test, expect } from "@playwright/test";
const { chromium } = require('playwright');


test.describe("Performance tests",async () => {
 let page;
 test.beforeEach(async () => {
  const browser = await chromium.launch();
   page = await browser.newPage();
   await page.goto(config.use.baseURL);
   await page.setViewportSize({ width: 1280, height: 800 });
 });

 test.afterAll(async () => {
   await page.close();
 });

 test("Performance Test", async ({ page }) => {
   // Measure the load time of the website
   const loadStartTime = Date.now();
   await page.waitForLoadState("networkidle");
   const loadTime = Date.now() - loadStartTime;
   expect(loadTime).toBeLessThanOrEqual(5000); // 5 seconds
 });
});


