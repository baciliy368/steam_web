
module.exports = {
  browsers: ["chromium"],
  launchOptions: {
    headless: false,
    downloadsPath: "testingFiles"
  },
  contextOptions: {
    acceptDownloads: true,
    locale: "en-GB"
  }
}