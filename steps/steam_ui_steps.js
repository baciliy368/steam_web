const DownloadClientPage = require('../pageObject/pages/downloadClientPage');
const SteamMainPage = require('../pageObject/pages/steamMainPage');

class SteamMainPageSteps {
  
  async downloadClient () {
    var steamMainPage = new SteamMainPage();
    await steamMainPage.goto();
    await steamMainPage.topStaticPanel.downloadButton.click();
    var downloadClientPage = new DownloadClientPage();
    await downloadClientPage.startDownloadAction('testingFiles');
  }
  
  async selectValueFromTopMenuDropdown(topMenuValue, valueFromDropdown) {
    var steamMainPage = new SteamMainPage();
    await steamMainPage.goto();
    await steamMainPage
            .storeTopView
            .selectValueFromTopMenuDropDownMenu(topMenuValue, valueFromDropdown);
  }
}

module.exports = new SteamMainPageSteps;
