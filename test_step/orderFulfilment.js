
// in this file you can append custom step methods to 'I' object
const orderAccess = require('../objects/orderFulfilment.json')
const timeWait = require('../wait_config/wait_config.json')

module.exports = function() {
  return actor({

    orderFulfilmentAccess: async function (lang) {
      let expandBtn = await this.grabNumberOfVisibleElements("//i[@class='ace-icon fa fa-angle-left']");

      if (expandBtn){
        this.click("//i[@class='ace-icon fa fa-angle-left']")
      }

      this.waitForClickable(orderAccess[lang].reportMenu, timeWait.waitFor10s)
      this.click(orderAccess[lang].reportMenu);

      this.wait(1)
    
      this.waitForClickable(orderAccess[lang].tradingMenu, timeWait.waitFor10s)
      this.click(orderAccess[lang].tradingMenu);

      this.waitForClickable(orderAccess[lang].orderFulfilment, timeWait.waitFor10s)
      this.see(orderAccess[lang].buttonByText.orderFulfilment_buttonByText, orderAccess[lang].orderFulfilment)
      this.click(orderAccess[lang].orderFulfilment)

      this.waitForElement(orderAccess[lang].createOrderBtn, timeWait.waitFor10s)
      this.see(orderAccess[lang].buttonByText.createOrderBtn_buttonByText, orderAccess[lang].createOrderBtn)
      
      this.waitForElement(orderAccess[lang].importBtn, timeWait.waitFor10s)
      this.see(orderAccess[lang].buttonByText.importBtn_buttonByText, orderAccess[lang].importBtn)

      this.waitForElement(orderAccess[lang].exportToExcelBtn, timeWait.waitFor10s)
      this.see(orderAccess[lang].buttonByText.exportToExcelBtn_buttonByText, orderAccess[lang].exportToExcelBtn)

      this.waitForElement(orderAccess[lang].searchBtn, timeWait.waitFor10s)
      this.see(orderAccess[lang].buttonByText.searchBtn_buttonByText, orderAccess[lang].searchBtn)

      this.waitForClickable(orderAccess[lang].createOrderBtn, timeWait.waitFor10s)
      this.click(orderAccess[lang].createOrderBtn)
      this.switchToNextTab()
      // this.dontSeeElement("//div[@class='alert alert-danger']")
      // this.wait(timeWait.waitFor10s)
    }
  });
}
