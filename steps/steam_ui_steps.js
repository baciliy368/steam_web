const DownloadClientPage = require('../pageObject/pages/downloadClientPage');
const SteamMainPage = require('../pageObject/pages/steamMainPage');
class SteamUiSteps
{
  async downloadClient () {
    var steamMainPage = new SteamMainPage();
    await steamMainPage.goto();
    await steamMainPage.openInstallPage();
    var downloadClientPage = new DownloadClientPage();
    await downloadClientPage.startDownloadAction('testingFiles');
  }
}

module.exports = { SteamUiSteps };
