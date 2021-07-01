const { chromium } = require('playwright');

class Browser {
  constructor() {
    this.driver; 
  }

  async start() {
    this.driver = await chromium.launch({ headless: false });
  }

  async quite() {
    await this.driver.close();
  }
}

module.exports = new Browser();