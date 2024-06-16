const puppeteer = require('puppeteer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();
    await page.goto('http://google.com');
    await page.screenshot({path: 'example.png'});

    await sleep(1000);

    await browser.close();
})();