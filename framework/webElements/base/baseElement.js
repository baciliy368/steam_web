const browser = require('../../browser');

class BaseElement {
  constructor(loc, name){
    this.loc = loc;
    this.name = name;
  }

  async isElementDisplayed(){
    return page.isDisabled(this.loc);
  }

  async hoverMouse(){
    page.hover(this.loc);
  }
  
  async click(){
    return await page.click(this.loc);
  }
}

module.exports = BaseElement;