const puppeteer = require('puppeteer');

const reportAccount = async (url) => {
  try {
    const browser = await puppeteer.launch({
      headless: false, // Set to true if you want to run the browser in headless mode
      args: ['--start-maximized'] // Start the browser maximized
    });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Click on the "..." menu button
    await page.click('.oajrl3', { delay: 110 });

    // Click on the "Find Support or Report Profile" option
    await page.click('.oajrl3', { delay: 110 });

    // Click on the "Report" button
    await page.click('.oajrl3', { delay: 110 });

    // Select the appropriate reason for reporting the account
    await page.click('.oajrl3', { delay: 110 });

    // Submit the report
    await page.click('.oajrl3', { delay: 110 });

    // Close the browser
    await browser.close();

    console.log('Account reported successfully.');
  } catch (error) {
    console.error('Error occurred:', error.message);
  }
};

// Report the given Facebook profile link
reportAccount('https://www.facebook.com/profile.php?id=61557385296819');