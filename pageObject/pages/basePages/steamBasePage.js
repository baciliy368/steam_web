const BasePage = require('../../../framework/webElements/base/basePage');
const HeaderView = require('../../views/headerView');

class SteamBasePage extends BasePage {
    constructor(urlEndpoint, locator, name) {
        super(locator, name);
        this.url = `https://store.steampowered.com/${urlEndpoint}`;
    }
    
    get topStaticPanel() {
        return new HeaderView();
    }

    async openInstallPage() {
        await this.topStaticPanel.clickDownloadButton();
    }
}

module.exports = SteamBasePage;