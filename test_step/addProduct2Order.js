const addProduct2OrderObs = require('../objects/addProduct2Order.json')
const testData = require('../objects/testInputData.json')
const timeWait = require('../wait_config/wait_config.json')
var numberFormat = require('../common/numberFormat.js')
 

module.exports = function () {
  return actor({

    addProductFieldsisVisible: function () {
      this.waitForElement(addProduct2OrderObs.vi.addProductLabel, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.addProductHeader, addProduct2OrderObs.vi.addProductLabel)

      this.waitForElement(addProduct2OrderObs.vi.stockLabel, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.stock_labelByText, addProduct2OrderObs.vi.stockLabel)

      this.waitForElement(addProduct2OrderObs.vi.stockSelection, timeWait.waitFor10s)
      this.see(testData.orderInputData.selectedWarehouse, addProduct2OrderObs.vi.stockSelection)

      this.waitForElement(addProduct2OrderObs.vi.vendorLabel, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.vendor_labelByText, addProduct2OrderObs.vi.vendorLabel)

      this.waitForElement(addProduct2OrderObs.vi.vendorSelection, timeWait.waitFor10s)
      this.see(testData.orderInputData.vendor, addProduct2OrderObs.vi.vendorSelection)

      this.waitForElement(addProduct2OrderObs.vi.promoBtn, timeWait.waitFor10s)
      this.seeElement(addProduct2OrderObs.vi.promoBtn)

      this.waitForElement(addProduct2OrderObs.vi.noColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.numberColumnTitle_ByText, addProduct2OrderObs.vi.noColumnTitle)

      this.waitForElement(addProduct2OrderObs.vi.productNameColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.productNameColumnTitle_ByText, addProduct2OrderObs.vi.productNameColumnTitle)

      this.waitForElement(addProduct2OrderObs.vi.quantityColummnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.quantityColummnTitle_ByText, addProduct2OrderObs.vi.quantityColummnTitle)

      this.waitForElement(addProduct2OrderObs.vi.unitPriceColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.unitPriceColumnTitle_ByText, addProduct2OrderObs.vi.unitPriceColumnTitle)

      this.waitForElement(addProduct2OrderObs.vi.discountColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.discountColumnTitle_ByText, addProduct2OrderObs.vi.discountColumnTitle)

      this.waitForElement(addProduct2OrderObs.vi.subTotalColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.subTotalColumnTitle_ByText, addProduct2OrderObs.vi.subTotalColumnTitle)

      this.waitForElement(addProduct2OrderObs.vi.actionColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs.vi.labelByText.actionColumnTitle_ByText, addProduct2OrderObs.vi.actionColumnTitle)


      let i;
      for (i = 0; i < testData.orderInputData.orderItems.length; i++) {
        // Added the 1st product and quantity: 2 to the order
        
        var subtotalItem = testData.orderInputData.orderItems[i].unitPrice * testData.orderInputData.orderItems[i].quantity
        subtotalItem = numberFormat(subtotalItem)
        var subTotalItemsObs = `//td[contains(text(),'${subtotalItem}') and ..${addProduct2OrderObs.vi.itemsAdded} ${testData.orderInputData.orderItems[i].productSelector}]`

        this.waitForElement(addProduct2OrderObs.vi.orderProductInputField, timeWait.waitFor10s)
        this.fillField(addProduct2OrderObs.vi.orderProductInputField, testData.orderInputData.orderItems[i].odooProduct_id)

        this.waitForElement(
          testData.orderInputData.productSelection
          + testData.orderInputData.orderItems[i].productSelector,
          timeWait.waitFor10s)
        this.click(
          testData.orderInputData.productSelection
          + testData.orderInputData.orderItems[i].productSelector
        )

        this.seeInField(addProduct2OrderObs.vi.orderProductInputField, testData.orderInputData.orderItems[i].name)

        this.waitForElement(addProduct2OrderObs.vi.quantityInputField, timeWait.waitFor10s)
        this.fillField(addProduct2OrderObs.vi.quantityInputField, testData.orderInputData.orderItems[i].quantity)

        this.wait(1)

        this.waitForElement(addProduct2OrderObs.vi.addOrderItemsBtn, timeWait.waitFor10s)
        this.click(addProduct2OrderObs.vi.addOrderItemsBtn)

        // Check the 1st product has successfully added
        this.waitForElement(
          addProduct2OrderObs.vi.itemsAdded
          + testData.orderInputData.orderItems[i].productSelector,
          timeWait.waitFor10s)
        this.see(
          `[${testData.orderInputData.orderItems[i].odooProduct_id}] ${testData.orderInputData.orderItems[i].name}`,
          addProduct2OrderObs.vi.itemsAdded
          + testData.orderInputData.orderItems[i].productSelector)

        // Check Subtotal of 1st product
        this.waitForElement(subTotalItemsObs, timeWait.waitFor10s)
        this.see(subtotalItem, subTotalItemsObs)
      }
    },

  });
}
