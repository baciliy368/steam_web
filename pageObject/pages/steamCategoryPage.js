const { format } = require('../../utils/stringUtill');
const GamesOnCurrentTabView = require('../views/GamesOnCurrentTabView');
const SteamBaseStorePage = require('./basePages/steamBaseStorePage');
const GamesSorttabsView = require('../views/gamesSortTabsView');

class SteamCategoryPage extends SteamBaseStorePage {
    constructor(categoryName) {
        super('', locators.storeContent(categoryName), "Steam Category Page");
    }

    get gamesOnCurrentTab() { return new GamesOnCurrentTabView()}
    get gamesSortTabs() { return new GamesSorttabsView()}
}

const locators = {
    storeContent: format`//h2[@class="pageheader" and contains(text(),"{0}}")]`
}

module.exports = SteamCategoryPage;