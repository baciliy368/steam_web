const BasePage = require('../../framework/basePage');

class SteamMainPage extends BasePage {
    constructor() {
        super('https://store.steampowered.com/');
    }
    
    async getStarted() {
        await this.page.click('text=Get started');
        await this.page.waitForSelector(`text=Core concepts`);
    }
}


module.exports = SteamMainPage;