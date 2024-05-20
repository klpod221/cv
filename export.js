const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // serve the index.html file and export to pdf
  await page.goto('file://' + __dirname + '/index.html', {
    waitUntil: 'networkidle0',
  });

  // export to pdf
  await page.pdf({
    path: 'output/cv.pdf',
    format: 'A4'
  });

  // export to png
  await page.screenshot({
    path: 'output/cv.png',
    fullPage: true
  });

  await browser.close();
})();
