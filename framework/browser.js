const {contextOptions} = require('../jest-playwright.config')
class Browser {
  
  async ControlDownloadAction(path) {
    const [download] = await Promise.all([
      await page.waitForEvent(PageActions.Donload)
    ]);
    var fileName = download.suggestedFilename();
    var pathToSave = `${path}/${fileName}`;
    await download.saveAs(pathToSave);
  }

  async GetLocale() 
  {
    return contextOptions.locale;     
  }
  
}

const PageActions = {
  Donload: 'download'
}

module.exports = new Browser;