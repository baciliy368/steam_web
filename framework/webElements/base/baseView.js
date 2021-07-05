const BaseElement = require("./baseElement");

class BaseView extends BaseElement{

  constructor(loc, name) {
      super(loc, name);
      this.loc = loc;
  }

  async ScrollToView() {
      return await page.ScrollToView(this.loc);
  }
}

module.exports = BaseView;