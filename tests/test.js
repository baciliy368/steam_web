const { isFileExistInTestFiles, isFileExistByPath } = require('../utils/fileUtil');
const { SteamUiSteps } = require('../steps/steam_ui_steps');
const SteamMainPage = require('../pageObject/pages/steamMainPage');

describe("Steam test", () => {
  
  test("Download client test", async () => {
    await new SteamUiSteps().downloadClient();
    await expect(isFileExistInTestFiles('SteamSetup.exe')).toBe(true);
  })

  /*test("Discount test", async () => {
    await new SteamUiSteps().downloadClient();
    await expect(isFileExistInTestFiles('SteamSetup.exe')).toBe(true);
  })*/
});
