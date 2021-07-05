const BasePage = require('../../framework/webElements/base/basePage');
const HeaderView = require('../views/headerView');
const SteamBasePage = require('./steamBasePage');

class SteamMainPage extends SteamBasePage {
    constructor() {
        super('', locators.storeContent, "Steam Main Page");
    }
}


const locators = {
    storeContent: '[class="home_page_body_ctn   "]',
}

module.exports = SteamMainPage;