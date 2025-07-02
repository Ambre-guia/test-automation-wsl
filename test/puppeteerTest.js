import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ argds: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
})();