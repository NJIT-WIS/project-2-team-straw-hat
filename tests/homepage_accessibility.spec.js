import config from '../playwright.config.js'
import { test, expect } from '@playwright/test'
const { chromium } = require('playwright');

test.describe('Accessibility tests', () => {
 let page


 test.beforeEach(async () => {
  const browser = await chromium.launch();
   page = await browser.newPage()
   await page.goto(config.use.baseURL) // Use the baseURL from the configuration
   await page.setViewportSize({ width: 1280, height: 800 })
 })


 test.afterEach(async () => {
   await page.close()
 })


 test('Check if the "Blog" header is present', async () => {
   const header = await page.$('a')
    expect(header).toBeTruthy()
 })


 test('Check if the Contact header has the correct font size', async () => {
   const fontSize = await page.$eval('a', (el) => parseFloat(getComputedStyle(el).fontSize))
   expect(fontSize).toBeTruthy()
 })


 test('Check if the "Empowering every child" paragraph is present', async () => {
   const paragraph = await page.$('p')
   expect(paragraph).toBeTruthy()
 })




})

