const BaseView = require('../../framework/webElements/base/baseView');
const Button = require('../../framework/webElements/controls/button');

class HeaderView extends BaseView {
    constructor() {
        super(locators.headerView, 'Header View');
    }
    
    get downloadButton() { return new Button(locators.installButton, 'Install button'); }

    async clickDownloadButton() {
        return await this.downloadButton.click();
    }
}

const locators = {
  installButton: '[class="header_installsteam_btn_content"]',
  headerView: '[id="global_header"]'
}


module.exports = HeaderView;