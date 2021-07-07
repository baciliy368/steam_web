const DownloadClientPage = require('../pageObject/pages/downloadClientPage');
const SteamMainPage = require('../pageObject/pages/steamMainPage');
const SteamCategoryPage = require('../pageObject/pages/steamCategoryPage');

class SteamMainPageSteps {
  
  async downloadClient () {
    var steamMainPage = new SteamMainPage();
    await steamMainPage.goto();
    await steamMainPage.topStaticPanel.downloadButton.click();
    var downloadClientPage = new DownloadClientPage();
    await downloadClientPage.startDownloadAction('testingFiles');
  }
  
  async selectValueFromStoreTopMenuDropdown(topMenuValue, valueFromDropdown) {
    var steamMainPage = new SteamMainPage();
    await steamMainPage.goto();
    await steamMainPage.storeTopMenu.selectValueFromStoreTopMenuDropDown(topMenuValue, valueFromDropdown);
  }
}

module.exports = new SteamMainPageSteps;
