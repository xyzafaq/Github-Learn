const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function getData() {
  try {
    let browser = await puppeteer.launch({
      headless: "new", // Opt-in to the new headless mode
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // Use these args as needed
    });
    let page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 768,
    })
    // page.setDefaultNavigationTimeout(2 * 60 * 1000);
    await page.goto('https://www.olx.com.pk/mobile-phones_c1453');
    await page.waitForSelector('._95dae89d');

    let results = [];

    let content = await page.content();
    let $ = cheerio.load(content);
    
    for (let index = 0; index <= 2; index++) {
      // Find the button with the text "Load Next" and click it
      const loadNextButton = await page.evaluate(() => {
        const buttons = document.querySelectorAll('button');
        for (const button of buttons) {
          if (button.textContent.includes('Load Next')) {
            console.log('Button found');
            return button;
          }
        }
      });

      if (loadNextButton) {
        let clicked = await loadNextButton.click();
        console.log(clicked);
        // Wait for navigation to complete
        await page.waitForNavigation({ waitUntil: 'networkidle0' });
      } else {
        break; // No "Load Next" button found, exit the loop
      }

      // Check if new content has loaded, for example, by looking for a specific element
      let newContent = await page.content();
      new$ = cheerio.load(newContent);
    }
    
    $('.ba608fb8 > li').each((index, element) => {
      console.log(index);
      // const price = $(element).find('._52497c97').text();
      // results.push(price);
    });



    // Check if there's a "Load Next" button and click it
    // if (!loadNextButton) {
    //   break; // No more "Load Next" button found, exit the loop
    // }
    // Wait for the new content to load (adjust the timeout as needed)
    // await page.waitForSelector('._95dae89d');

    await browser.close();
  
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

getData();
