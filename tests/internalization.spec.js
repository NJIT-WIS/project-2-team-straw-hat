import config from '../playwright.config.js'
import { test, expect } from '@playwright/test'
const { chromium } = require('playwright');

test.describe('Internationalization tests', async () => {  
 let page

 test.beforeEach(async () => {
  const browser = await chromium.launch();
   page = await browser.newPage();
   await page.goto(config.use.baseURL);
   await page.setViewportSize({ width: 1280, height: 800 });
 });

 test.afterEach(async () => {
   await page.close()
 })

 test('Check if pop up is in English', async () => {
   const courseButtonText = await page.$eval('h1', el => el.innerText)
   expect(courseButtonText).toBe('This website collects cookies')
 })
})
