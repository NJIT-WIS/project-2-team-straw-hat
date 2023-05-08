import config from "../playwright.config.js";
import { test, expect } from "@playwright/test";
const { chromium } = require('playwright');


test.describe("Privacy Page", () => {
 let page;


 test.beforeEach(async () => {
  const browser = await chromium.launch();
   page = await browser.newPage();
   await page.goto(config.use.baseURL + "/");
   await page.setViewportSize({ width: 1280, height: 800 });
 });


 test.afterEach(async () => {
   await page.close();
 });


 test("Check for privacy page", async () => {
   const labelElements = await page.$$(".fw-bold border-bottom");
   expect(labelElements).toBeTruthy();
 });
});
