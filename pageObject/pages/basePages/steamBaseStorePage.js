const HeaderView = require('../../views/headerView');
const SteamBasePage = require('./steamBasePage');

class SteamBaseStorePage extends SteamBasePage {
    constructor(url, loc, name) {
        super(url, loc, name);
    }

    get storeTopView() {
        return new StoreTopMenu(); 
    }
}

module.exports = SteamBaseStorePage;