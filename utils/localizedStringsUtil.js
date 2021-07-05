const Browser = require('../framework/browser')  
const {contextOptions} = require('../jest-playwright.config')

function GetLocalizedStringsProperty() {
  return LocalizedStringProp[contextOptions.locale]
}

const EngStrings = {
  Actions: "Action",
  Categories: "Categories",
}

const LocalizedStringProp = {
  'en-GB': EngStrings
}


module.exports = { GetLocalizedStringsProperty };

