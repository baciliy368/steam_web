const BaseElement = require('../../webElements/base/baseElement');

class Button extends BaseElement {
  constructor(loc, name){
    super(loc, name);
  }

  async click(){ page.click(this.loc); }
}

module.exports = Button;