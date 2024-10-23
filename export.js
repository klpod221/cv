const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto("file://" + __dirname + "/index.html", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const downloadBtn = document.querySelector(".download-btn");
    downloadBtn.remove();
  });

  await page.pdf({
    path: "output/cv.pdf",
    format: "A4",
  });

  await page.screenshot({
    path: "output/cv.png",
    fullPage: true,
  });

  await browser.close();
})();
