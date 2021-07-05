const BaseView = require('../../framework/webElements/base/baseView');
const Button = require('../../framework/webElements/controls/button');
const Browser = require('../../framework/browser');
const SteamBasePage = require('./steamBasePage');

class DownloadClientPage extends SteamBasePage {
    constructor() {
        super('about', locators.donwloadClientView, 'Download View');
    }
    
    get downloadButton() { return new Button(locators.downloadButton, 'Donwload Button'); }

    async startDownloadAction(path) {
        await this.downloadButton.click();
        await Browser.ControlDownloadAction(path);
    }
}

const locators = {
    downloadButton: '[class="about_install_steam_link"]',
    donwloadClientView: '[id="about_header_area"]'
}


module.exports = DownloadClientPage;