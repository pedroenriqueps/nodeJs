import { firefox } from "playwright-firefox"

export const browser = await firefox.launch({
    // headless: false
})

export const page = await browser.newPage();
