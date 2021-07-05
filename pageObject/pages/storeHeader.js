const BaseView = require('../../framework/webElements/base/baseView');
const Button = require('../../framework/webElements/controls/button');

class StoreHeader extends BaseView {
    constructor() {
        super(locators.HeaderView, 'Store Header');
    }
    
    get downloadButton() { return new Button(locators.downloadButton, 'Donwload Button'); }

    async selectCategiry(category) {
        await this.downloadButton.click();
        await Browser.ControlDownloadAction(path);
    }
}

const locators = {
    HeaderView: '[id="store_header"]'
}


module.exports = StoreHeader;