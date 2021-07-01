const browser = require('./browser');

class BaseElement {
  constructor(locator, name){
    this.locator = locator;
    this.name = name;
  }

  async _findElement() {
    logger.info(`Find element ${this.name}`);
    return browser.driver.findElement(this.locator);
  }

  async typeText(text, key){
    const el = await this._findElement();
    logger.info(`Type ${text} in ${this.name}`);
    return el.sendKeys(text, key);
  }

  async getText(){
    const el = await this._findElement();
    logger.info(`Get text from ${this.name}`);
    return el.getText();
  }

  async isDisplayed(){
    const el = await this._findElement();
    logger.info(`Check that ${this.name} is displayed`);
    return el.isDisplayed();
  }
}

module.exports = BaseElement;