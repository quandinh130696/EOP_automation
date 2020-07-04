
// in this file you can append custom step methods to 'I' object
const orderAccess = require('../objects/orderFulfilment.json')
const timeWait = require('../wait_config/wait_config.json')

module.exports = function() {
  return actor({

    orderFulfilmentAccess: async function () {
      let expandBtn = await this.grabNumberOfVisibleElements("//i[@class='ace-icon fa fa-angle-left']");

      if (expandBtn){
        this.click("//i[@class='ace-icon fa fa-angle-left']")
      }

      this.waitForClickable(orderAccess.vi.reportMenu, timeWait.waitFor10s)
      this.click(orderAccess.vi.reportMenu);

      this.wait(1)
    
      this.waitForClickable(orderAccess.vi.tradingMenu, timeWait.waitFor10s)
      this.click(orderAccess.vi.tradingMenu);

      this.waitForClickable(orderAccess.vi.orderFulfilment, timeWait.waitFor10s)
      this.see("Vận hành", orderAccess.vi.orderFulfilment)
      this.click(orderAccess.vi.orderFulfilment)

      this.waitForElement(orderAccess.vi.createOrderBtn, timeWait.waitFor10s)
      this.see("Tạo đơn hàng", orderAccess.vi.createOrderBtn)
      
      this.waitForElement(orderAccess.vi.importBtn, timeWait.waitFor10s)
      this.see("Phiếu nhập", orderAccess.vi.importBtn)

      this.waitForElement(orderAccess.vi.exportToExcelBtn, timeWait.waitFor10s)
      this.see("Xuất ra file Excel", orderAccess.vi.exportToExcelBtn)

      this.waitForElement(orderAccess.vi.searchBtn, timeWait.waitFor10s)
      this.see("Tìm kiếm", orderAccess.vi.searchBtn)

      this.waitForClickable(orderAccess.vi.orderFulfilment, timeWait.waitFor10s)
      this.click(orderAccess.vi.createOrderBtn)
      this.switchToNextTab()
      // this.dontSeeElement("//div[@class='alert alert-danger']")
      // this.wait(timeWait.waitFor10s)
    }
  });
}
