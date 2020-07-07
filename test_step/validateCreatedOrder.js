var orderListObs = require('../objects/orderList')
var addProductToOrder = require('./addProduct2Order')
var orderCreate = require('./orderCreate')
var timeWait = require('../wait_config/wait_config.json')
var commonFunction = require('../common/commonFunction.js')
var testData = require('../objects/testInputData.json')

module.exports = function () {
  return actor({
    orderCreatedColumnsVisible: function () {
      this.waitForElement(orderListObs.vi.orderGeneralColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.orderGeneralColumnTitle_labelByText, orderListObs.vi.orderGeneralColumnTitle)
      this.waitForElement(orderListObs.vi.statusOrderColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.statusOrderColumnTitle_labelByText, orderListObs.vi.statusOrderColumnTitle)
      this.waitForElement(orderListObs.vi.orderProductColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.orderProductColumnTitle_labelByText, orderListObs.vi.orderProductColumnTitle)
      this.waitForElement(orderListObs.vi.orderAddressColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.orderAddressColumnTitle_labelByText, orderListObs.vi.orderAddressColumnTitle)
      this.waitForElement(orderListObs.vi.orderTotalColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.orderTotalColumnTitle_labelByText, orderListObs.vi.orderTotalColumnTitle)
      this.waitForElement(orderListObs.vi.comOrderColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.comOrderColumnTitle_labelByText, orderListObs.vi.comOrderColumnTitle)
      this.waitForElement(orderListObs.vi.chanenlColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.chanenlColumnTitle_labelByText, orderListObs.vi.chanenlColumnTitle)
      this.waitForElement(orderListObs.vi.actionColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs.vi.labelByText.actionColumnTitle_labelByText, orderListObs.vi.actionColumnTitle)
    },

    validateOrderCreated: async function (orderID, subtotal, total) {
      let street = testData.orderInputData.address
      let district = testData.orderInputData.district
      let phone = testData.orderInputData.phone.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "$1 $2 $3");
      var status = orderListObs.vi.orderStatus
      var vendor = testData.orderInputData.vendor

      var statusToUpperCase = await commonFunction.upperCase(status)

      this.waitForElement(orderListObs.orderValidate(orderID).orderId, timeWait.waitFor10s)
      this.see(orderID, orderListObs.orderValidate(orderID).orderId)

      this.waitForElement(orderListObs.orderValidate(orderID).orderGeneral, timeWait.waitFor10s)
      this.see(testData.orderInputData.cusName, orderListObs.orderValidate(orderID).orderGeneral)



      this.see(phone, orderListObs.orderValidate(orderID).orderGeneral)

      this.waitForElement(orderListObs.orderValidate(orderID, status).orderStatus, timeWait.waitFor10s)
      this.see(statusToUpperCase, orderListObs.orderValidate(orderID, status).orderStatus)

      let i;
      var itemName
      for (i = 0; i < testData.orderInputData.orderItems.length; i++) {

        itemName = testData.orderInputData.orderItems[i].name
        console.log(itemName)
        this.waitForElement(orderListObs.orderValidate(orderID, null, itemName).orderItems, timeWait.waitFor10s)
        this.see(itemName, orderListObs.orderValidate(orderID, null, itemName).orderItems)
      }

      this.waitForElement(orderListObs.orderValidate(orderID, null, null, subtotal).subTotal, timeWait.waitFor10s)
      this.see(subtotal, orderListObs.orderValidate(orderID, null, null, subtotal).subTotal)

      this.waitForElement(orderListObs.orderValidate(orderID, null, null, null, vendor).vendorOrder, timeWait.waitFor10s)
      this.see(testData.orderInputData.vendor, orderListObs.orderValidate(orderID, null, null, null, vendor).vendorOrder)

      this.waitForElement(orderListObs.orderValidate(orderID, null, null, null, null, street, district).addressOrder, timeWait.waitFor10s)
      this.see(street, orderListObs.orderValidate(orderID, null, null, null, null, street, district).addressOrder)
      this.see(district, orderListObs.orderValidate(orderID, null, null, null, null, street, district).addressOrder)

      this.waitForElement(orderListObs.orderValidate(orderID, null, null, null, null, null, null, total).totalPayment, timeWait.waitFor10s)
      this.see(total, orderListObs.orderValidate(orderID, null, null, null, null, null, null, total).totalPayment)

      this.seeElement(orderListObs.orderValidate(orderID).editBtn)
      this.seeElement(orderListObs.orderValidate(orderID).productListBtn)
    }
  });
}