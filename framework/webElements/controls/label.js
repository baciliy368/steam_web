const BaseElement = require('../base/baseElement');

class Label extends BaseElement {
  constructor(loc, name){
    super(loc, name);
  }

  async click(){ page.click(this.loc); }
}

module.exports = Label;