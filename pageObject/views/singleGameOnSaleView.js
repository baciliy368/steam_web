const BaseView = require('../../framework/webElements/base/baseView');
const Button = require('../../framework/webElements/controls/button');
const { format } = require('../../utils/stringUtill');

class SingleGameOnSaleView extends BaseView {
    constructor() {
        super(locators.StoreTopMenuLoc, 'Store top menu');
    }

}

const locators = {
  StoreTopMenuLoc: '//div[contains(@style,"display: block;")]//a[contains(@class,"tab_item")]',
  MenuItemLoc: format`//span[@class='pulldown']//a[contains(text(),'${0}')]`,
  DropDownItemLoc: format`//div[@data-genre-group='action']//a[contains(text(),'${0}')]`,
}


module.exports = SingleGameOnSaleView;