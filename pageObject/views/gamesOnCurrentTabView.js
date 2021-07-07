const BaseView = require('../../framework/webElements/base/baseView');
const Button = require('../../framework/webElements/controls/button');
const { format } = require('../../utils/stringUtill');

class GamesOnCurrentTabView extends BaseView {
    constructor() {
        super(locators.GamesOnTabLoc, 'Games on current tab');
    }
    get gamesAsModel(){  }
}

const locators = {
  GamesOnTabLoc: '//div[contains(@style,"display: block;") and contains(@id,"tab")]',
}


module.exports = GamesOnCurrentTabView;