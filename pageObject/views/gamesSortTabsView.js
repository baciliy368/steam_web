const BaseView = require('../../framework/webElements/base/baseView');
const Button = require('../../framework/webElements/controls/button');
const { format } = require('../../utils/stringUtill');

class GamesSortTabsView extends BaseView {
    constructor() {
        super(locators.GamesSortTabsLoc, 'Games sort tab view');
    }
    get TopSellers(){ return new Button(locators.TopSellersTabLoc, 'Top sellers tab Button'); }
}

const locators = {
  GamesSortTabsLoc: '//div[contains(@class,"tabbar_ctn")]',
  TopSellersTabLoc: '[id=tab_select_TopSellers]',
}


module.exports = GamesSortTabsView;