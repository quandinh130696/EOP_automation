var orderListObs = require('../objects/orderList')
var addProductToOrder = require('./addProduct2Order')
var orderCreate = require('./orderCreate')
var timeWait = require('../wait_config/wait_config.json')
var commonFunction = require('../common/commonFunction.js')
var testData = require('../objects/testInputData.json')

module.exports = function () {
  return actor({
    orderCreatedColumnsVisible: function (lang) {
      this.waitForElement(orderListObs[lang].orderGeneralColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.orderGeneralColumnTitle_labelByText, orderListObs[lang].orderGeneralColumnTitle)
      this.waitForElement(orderListObs[lang].statusOrderColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.statusOrderColumnTitle_labelByText, orderListObs[lang].statusOrderColumnTitle)
      this.waitForElement(orderListObs[lang].orderProductColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.orderProductColumnTitle_labelByText, orderListObs[lang].orderProductColumnTitle)
      this.waitForElement(orderListObs[lang].orderAddressColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.orderAddressColumnTitle_labelByText, orderListObs[lang].orderAddressColumnTitle)
      this.waitForElement(orderListObs[lang].orderTotalColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.orderTotalColumnTitle_labelByText, orderListObs[lang].orderTotalColumnTitle)
      this.waitForElement(orderListObs[lang].comOrderColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.comOrderColumnTitle_labelByText, orderListObs[lang].comOrderColumnTitle)
      this.waitForElement(orderListObs[lang].chanenlColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.chanenlColumnTitle_labelByText, orderListObs[lang].chanenlColumnTitle)
      this.waitForElement(orderListObs[lang].actionColumnTitle, timeWait.waitFor10s)
      this.see(orderListObs[lang].labelByText.actionColumnTitle_labelByText, orderListObs[lang].actionColumnTitle)
    },

    validateOrderCreated: async function (orderID, subtotal, total, lang, cusName) {
      let street = testData.orderInputData.address
      let district = testData.orderInputData.district
      let phone = testData.orderInputData.phone.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "$1 $2 $3");
      var status = orderListObs[lang].orderStatus
      var vendor = testData.orderInputData.vendor

      var statusToUpperCase = await commonFunction.upperCase(status)

      this.waitForElement(orderListObs.orderValidate(orderID).orderId, timeWait.waitFor10s)
      this.see(orderID, orderListObs.orderValidate(orderID).orderId)

      this.waitForElement(orderListObs.orderValidate(orderID).orderGeneral, timeWait.waitFor10s)
      this.see(cusName, orderListObs.orderValidate(orderID).orderGeneral)



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