const BaseElement = require("./baseElement");

class BasePage extends BaseElement{

  constructor(loc, name) {
    super(loc, name);
    this.url = ''
  }

  async goto() {
    await page.goto(this.url);
  }

  async isPageOpened() {
    return await super.isElementDisplayed();
  }
}

module.exports = BasePage;