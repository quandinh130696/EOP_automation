const { setHeadlessWhen, setWindowSize } = require('@codeceptjs/configure');
const BASEURL = "https://eop.staging.ecomobi.com"
setHeadlessWhen(process.env.HEADLESS); // enables headless mode when HEADLESS environment variable exists
const fs = require('fs');

// create environment properties for Test Report
if (BASEURL === "https://dev-eop.ecomobi.com") {
  fs.copyFile('./environment_properties/dev_environment.properties', './output/environment.properties', (err) => {
    if (err) throw err;
  });
} 
else if (BASEURL === "https://eop.staging.ecomobi.com"){
  fs.copyFile('./environment_properties/stage_environment.properties', './output/environment.properties', (err) => {
    if (err) throw err;
  });
}

exports.config = {
  tests: './test_e2e/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: `${BASEURL}`,
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      windowSize: "1600x900",
      timeouts: {
        "script": 60000,
        "page load": 10000
      },
      smartWait: 10000,
      keepBrowserState: true,
      uniqueScreenshotNames: true,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--no-sandbox", "--headless", '--window-size=1600,900']
          // args: ["--disable-gpu", "--no-sandbox", '--window-size=1600,900']
        }
      }
    },
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    }
  },
  include: {
    I: './steps_file.js',
    OrderAccess: './test_step/orderFulfilment.js',
    OrderCreate: './test_step/orderCreate.js',
    OrderAddProduct: './test_step/addProduct2Order.js',
    CreatedOrder: './test_step/validateCreatedOrder.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'automation_demo'
}