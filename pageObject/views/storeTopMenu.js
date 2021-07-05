const BaseView = require('../../framework/webElements/base/baseView');
const Button = require('../../framework/webElements/controls/button');
const { format } = require('../../utils/stringUtill');

class StoreTopMenu extends BaseView {
    constructor() {
        super(locators.StoreTopMenuLoc, 'Store top menu');
    }

    async selectValueFromTopMenuDropDownMenu(menuButtonName, dropDownValue)
    {
        await this.openDropDownFromMenuButtonByText(menuButtonName);
        await this.clickOnDropDownItemFromMenuByText(dropDownValue);
    }
    
    async openDropDownFromMenuButtonByText(menuButtonName) {
        //var menuButton = new Button(locators.MenuItemLoc + menuButtonName, `${menuButtonName} Top Menu Button`);
        var menuButton = new Button(locators.MenuItemLoc(menuButtonName),
                                    `${menuButtonName} Top Menu Button`);
        await menuButton.hoverMouse();
    }
    
    async clickOnDropDownItemFromMenuByText(menuButtonName) {
        var menuButton = new Button(locators.DropDownItemLoc(menuButtonName),
          `                         ${menuButtonName} button from Dropdown`);
        await menuButton.click();
    }
}

const locators = {
  StoreTopMenuLoc: '[class="store_nav_bg"]',
  MenuItemLoc: format`//span[@class='pulldown']//a[contains(text(),'${0}')]`,
  DropDownItemLoc: format`//div[@data-genre-group='action']//a[contains(text(),'${0}')]`,
}


module.exports = StoreTopMenu;