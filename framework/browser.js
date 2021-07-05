class Browser {
  
  async сontrolDownloadAction(path) {
    const [download] = await Promise.all([
      await page.waitForEvent(PageActions.Donload)
    ]);
    var fileName = download.suggestedFilename();
    var pathToSave = `${path}/${fileName}`;
    await download.saveAs(pathToSave);
  } 
}

const PageActions = {
  Donload: 'download'
}

module.exports = new Browser;