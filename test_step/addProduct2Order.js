const addProduct2OrderObs = require('../objects/addProduct2Order.json')
const testData = require('../objects/testInputData.json')
const timeWait = require('../wait_config/wait_config.json')
var commonFunction = require('../common/commonFunction.js')

var subTotalItems = 0;
let totalOrder = 0;
let shippingFee = 0

module.exports = function () {
  return actor({

    addProductFieldsisVisible: function (lang) {
      this.waitForElement(addProduct2OrderObs[lang].addProductLabel, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.addProductHeader, addProduct2OrderObs[lang].addProductLabel)
      this.waitForElement(addProduct2OrderObs[lang].stockLabel, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.stock_labelByText, addProduct2OrderObs[lang].stockLabel)
      this.waitForElement(addProduct2OrderObs[lang].stockSelection, timeWait.waitFor10s)
      this.see(testData.orderInputData.selectedWarehouse, addProduct2OrderObs[lang].stockSelection)
      this.waitForElement(addProduct2OrderObs[lang].vendorLabel, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.vendor_labelByText, addProduct2OrderObs[lang].vendorLabel)
      this.waitForElement(addProduct2OrderObs[lang].vendorSelection, timeWait.waitFor10s)
      this.see(testData.orderInputData.vendor, addProduct2OrderObs[lang].vendorSelection)
      this.waitForElement(addProduct2OrderObs[lang].promoBtn, timeWait.waitFor10s)
      this.seeElement(addProduct2OrderObs[lang].promoBtn)
      this.waitForElement(addProduct2OrderObs[lang].noColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.numberColumnTitle_ByText, addProduct2OrderObs[lang].noColumnTitle)
      this.waitForElement(addProduct2OrderObs[lang].productNameColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.productNameColumnTitle_ByText, addProduct2OrderObs[lang].productNameColumnTitle)
      this.waitForElement(addProduct2OrderObs[lang].quantityColummnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.quantityColummnTitle_ByText, addProduct2OrderObs[lang].quantityColummnTitle)
      this.waitForElement(addProduct2OrderObs[lang].unitPriceColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.unitPriceColumnTitle_ByText, addProduct2OrderObs[lang].unitPriceColumnTitle)
      this.waitForElement(addProduct2OrderObs[lang].discountColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.discountColumnTitle_ByText, addProduct2OrderObs[lang].discountColumnTitle)
      this.waitForElement(addProduct2OrderObs[lang].subTotalColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.subTotalColumnTitle_ByText, addProduct2OrderObs[lang].subTotalColumnTitle)
      this.waitForElement(addProduct2OrderObs[lang].actionColumnTitle, timeWait.waitFor10s)
      this.see(addProduct2OrderObs[lang].labelByText.actionColumnTitle_ByText, addProduct2OrderObs[lang].actionColumnTitle)
    },

    addProductsToOrder: async function (lang) {
      let i;
      for (i = 0; i < testData.orderInputData.orderItems.length; i++) {
        // Added products and quantity: 2 to the order
        var subtotalPerItem = testData.orderInputData.orderItems[i].unitPrice * testData.orderInputData.orderItems[i].quantity
        subTotalItems += subtotalPerItem;
        subtotalPerItem = await commonFunction.numberFormat(subtotalPerItem)
        var subTotalItemsObs = `//td[contains(text(),'${subtotalPerItem}') and ..${addProduct2OrderObs[lang].itemsAdded} ${testData.orderInputData.orderItems[i].productSelector}]`
        this.waitForElement(addProduct2OrderObs[lang].orderProductInputField, timeWait.waitFor10s)
        this.fillField(addProduct2OrderObs[lang].orderProductInputField, testData.orderInputData.orderItems[i].odooProduct_id)
        this.waitForElement(
          testData.orderInputData.productSelection
          + testData.orderInputData.orderItems[i].productSelector,
          timeWait.waitFor10s)
        this.click(
          testData.orderInputData.productSelection
          + testData.orderInputData.orderItems[i].productSelector
        )
        this.seeInField(addProduct2OrderObs[lang].orderProductInputField, testData.orderInputData.orderItems[i].name)
        this.waitForElement(addProduct2OrderObs[lang].quantityInputField, timeWait.waitFor10s)
        this.fillField(addProduct2OrderObs[lang].quantityInputField, testData.orderInputData.orderItems[i].quantity)
        this.wait(1)
        this.waitForElement(addProduct2OrderObs[lang].addOrderItemsBtn, timeWait.waitFor10s)
        this.click(addProduct2OrderObs[lang].addOrderItemsBtn)

        // Check the 1st product has successfully added
        this.waitForElement(
          addProduct2OrderObs[lang].itemsAdded
          + testData.orderInputData.orderItems[i].productSelector,
          timeWait.waitFor10s)
        this.see(
          `[${testData.orderInputData.orderItems[i].odooProduct_id}] ${testData.orderInputData.orderItems[i].name}`,
          addProduct2OrderObs[lang].itemsAdded
          + testData.orderInputData.orderItems[i].productSelector)

        // Check Subtotal of Items
        this.waitForElement(subTotalItemsObs, timeWait.waitFor10s)
        this.see(subtotalPerItem, subTotalItemsObs)
      }

      // Check the totalPayment of order 
      this.waitForElement(addProduct2OrderObs[lang].shippingFeeField, timeWait.waitFor10s)
      shippingFee = parseInt(await this.grabValueFrom(addProduct2OrderObs[lang].shippingFeeField));
      totalOrder = await commonFunction.numberFormat(subTotalItems + shippingFee)
      let subtotalOrderObj = `//td[text()='${totalOrder}']`;
      this.see(totalOrder, subtotalOrderObj)
      this.scrollPageToBottom()
      this.click(addProduct2OrderObs[lang].saveBtn)

      subTotalItems = await commonFunction.numberFormat(subTotalItems)

      return {totalOrder, shippingFee, subTotalItems}
    }
  });
}
