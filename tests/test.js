const { isFileExistInTestFiles } = require('../utils/fileUtil');
const { GetLocalizedStringsProperty } = require('../utils/localizedStringsUtil');
const SteamMainPageSteps = require('../steps/steamMainPageSteps');
const steamCategoryPageSteps = require('../steps/steamCategoryPageSteps');

describe("Steam test", () => {
  
  /*(test("Download client test", async () => {
    await SteamMainPageSteps.downloadClient();
    await expect(isFileExistInTestFiles('SteamSetup.exe')).toBe(true);
  })*/

  test("Top Discount for game test", async () => 
  {
    var topMenuValue = await GetLocalizedStringsProperty().Categories;
    var valueFromDropdown = await GetLocalizedStringsProperty().Actions;
    await SteamMainPageSteps.selectValueFromStoreTopMenuDropdown(topMenuValue, valueFromDropdown);
    await steamCategoryPageSteps.getGamesFromTopSallersTabOnGameCategoryPage(valueFromDropdown);
    await new Promise(resolve => setTimeout(resolve, 10000));
    await expect(isFileExistInTestFiles('SteamSetup.exe')).toBe(true);
  })
});
