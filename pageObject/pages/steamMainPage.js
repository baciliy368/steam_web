const StoreTopMenu = require('../views/storeTopMenu');
const SteamBaseStorePage = require('./basePages/steamBaseStorePage');

class SteamMainPage extends SteamBaseStorePage {
    constructor() {
        super('', locators.storeContent, "Steam Main Page");
    }

}

const locators = {
    storeContent: '[class="home_page_body_ctn   "]'
}

module.exports = SteamMainPage;