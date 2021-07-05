const { isFileExistInTestFiles } = require('../utils/fileUtil');
const { GetLocalizedStringsProperty } = require('../utils/localizedStringsUtil');
const SteamMainPage = require('../pageObject/pages/steamMainPage');
const StoreTopMenu = require('../pageObject/views/storeTopMenu');
const SteamUiSteps = require('../steps/steam_ui_steps');

describe("Steam test", () => {
  
  /*(test("Download client test", async () => {
    await SteamUiSteps.downloadClient();
    await expect(isFileExistInTestFiles('SteamSetup.exe')).toBe(true);
  })*/

  test("Discount test", async () => 
  {
    var topMenuValue = await GetLocalizedStringsProperty().Categories;
    var valueFromDropdown = await GetLocalizedStringsProperty().Actions;
    await SteamUiSteps.selectValueFromTopMenuDropdown(topMenuValue, valueFromDropdown);
    await expect(isFileExistInTestFiles('SteamSetup.exe')).toBe(true);
  })
});
