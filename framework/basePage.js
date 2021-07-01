class BasePage{

  constructor(url) {
      this.page = page;
      this.url = url;
  }

  async goto() {
      await this.page.goto(this.url);
  }

  async isPageOpened(){
    const isOpened = await this.form.isDisplayed();
    logger.info(`Form "${this.name}" is opened - "${isOpened}"`);
    return isOpened;
  }
}

module.exports = BasePage;