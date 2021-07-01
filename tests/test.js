const steamMainPage = require('../web_elements/pages/SteamMainPage');
const browser = require('../framework/browser')

describe("Steam test", () => {
  /*beforeEach( async () => {
    console.log('before');
    browser.start();
  }); 

  afterEach( async () => {
    console.log('after');
    browser.quite();
  }); 
  */

  test("Download client test", async () => {
    const steamMain = new steamMainPage();
    await steamMain.goto();
    await steamMain.page.click('[class="header_installsteam_btn_content"]');
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 10000)
    });
  
    let result = await promise;
    expect(1+2).toBe(3);
  })
});
