import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch(
        // headless e somente para abrir o navegador automaticamente
        // { headless: false }
    );
    const page = await browser.newPage();

    await page.goto('https://www.instagram.com/nba/');
    const imgList = await page.evaluate(() => {
        // toda essa função será executada no browser ou seja no DOM

        // pegar todas as imagens que estao na parte de posts 
        const nodeList = document.querySelectorAll('._al3n');

        // transformar o NodeList em array 
        const imgArray = [...nodeList]

        // transformar os nodes (elementoss html) em objetos JS
        const imgList = imgArray.map(({ src }) => ({
            src: src
        }))
        console.log(imgList)
        // colocar para fora da funcao
        return imgList
    })

    // escrever os dados em um arquivo local (json)
    fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
        if (err) throw new Error('something went wrong')

        console.log("well done!!")
    })
    await browser.close();
})();

