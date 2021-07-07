const Button = require("./webElements/controls/button");
const Label = require("./webElements/controls/label");

class BrowserHelper {
  
  async сontrolDownloadAction(path) {
    const [download] = await Promise.all([
      await page.waitForEvent(PageActions.Donload)
    ]);
    var fileName = download.suggestedFilename();
    var pathToSave = `${path}/${fileName}`;
    await download.saveAs(pathToSave);
  }

  async GetButton(locator, name){ return new Button(locator, name); }

  async GetLabel(locator, name){ return new Label(locator, name); }
  
  async findElements(locator) {
    var elements = await page.$$(locator);
    return Array.from(elements, element => new Button(element.getPrgitoperties));
  }


}

const PageActions = {
  Donload: 'download'
}

module.exports = new BrowserHelper;