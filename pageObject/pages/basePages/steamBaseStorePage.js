const StoreTopMenu = require('../../views/storeTopMenu');
const SteamBasePage = require('./steamBasePage');

class SteamBaseStorePage extends SteamBasePage {
    constructor(url, loc, name) {
        super(url, loc, name);
    }

    get storeTopMenu() { return new StoreTopMenu(); }
}

module.exports = SteamBaseStorePage;