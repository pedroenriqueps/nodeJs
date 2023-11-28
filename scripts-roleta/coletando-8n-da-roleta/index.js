import { page } from "./navigator.js";

await page.goto('https://casino.betfair.com/pt-br/')

await page.waitForSelector(".table-results")

let num;
// CLASS .table-results > .results > .number
for (let res of await page.locator('.table-results > .results').all())
    num = await res.locator('> .number').allTextContents()
console.log(num)
