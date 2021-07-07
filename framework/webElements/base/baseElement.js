const browser = require('../../browserHelper');

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
    return await this.getElement().click();
  }

  async getElement()
  {
    return page.$(this.loc);
  }
}

module.exports = BaseElement;