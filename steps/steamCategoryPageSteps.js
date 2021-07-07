const SteamCategoryPage = require('../pageObject/pages/steamCategoryPage');

class SteamCategoryPageSteps {
  
  async getGamesFromTopSallersTabOnGameCategoryPage(categoryName) {
    var steamCategoryPage = new SteamCategoryPage(categoryName);
    await steamCategoryPage.gamesSortTabs.TopSellers.click();
  }

}

module.exports = new SteamCategoryPageSteps;
