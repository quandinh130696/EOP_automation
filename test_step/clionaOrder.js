var clionaObj = require('../objects/clionaOrder')
var timeWait = require('../wait_config/wait_config.json')
var commonFunction = require('../common/commonFunction.js')

let unitPriceFormated, subtotalItemsFormated

module.exports = function () {
    return actor({
        orderClionaCreated: async function () {
            unitPriceFormated = await commonFunction.clionaNumberFormat(clionaObj.productInfor.unitPrice)
            subtotalItemsFormated = await commonFunction.clionaNumberFormat(clionaObj.clionaOrder().subtotalItems)

            this.amOnPage(clionaObj.clionaPage.clionaURL)
            this.waitForElement(clionaObj.clionaPage.productSearchBar, timeWait.waitFor10s)
            this.fillField(clionaObj.clionaPage.productSearchBar, clionaObj.productInfor.keywords)
            this.waitForClickable(clionaObj.clionaPage.searchBtn, timeWait.waitFor10s)
            this.click(clionaObj.clionaPage.searchBtn)
            this.waitForElement(clionaObj.clionaPage.searchedProduct, timeWait.waitFor10s)
            this.click(clionaObj.clionaPage.searchedProduct)
            this.waitForText(clionaObj.productInfor.productName, timeWait.waitFor10s)

            //insert product quantity
            this.waitForElement(clionaObj.clionaPage.quantityInput)
            this.fillField(clionaObj.clionaPage.quantityInput, clionaObj.productInfor.quantity)

            //add to cart
            this.waitForElement(clionaObj.clionaPage.addToCart, timeWait.waitFor10s)
            this.click(clionaObj.clionaPage.addToCart)

            // validate number of headerCartCount -> click to headerCartCount
            this.waitForElement(clionaObj.clionaPage.cart, timeWait.waitFor10s)
            this.see(clionaObj.productInfor.quantity, clionaObj.clionaOrder().headerCartCount)
            this.waitForClickable(clionaObj.clionaPage.cart, timeWait.waitFor10s)
            this.click(clionaObj.clionaPage.cart)

            // validate cart car
            this.waitForElement(clionaObj.clionaOrder().orderItemName, timeWait.waitFor10s)
            this.see(clionaObj.productInfor.productName, clionaObj.clionaOrder().orderItemName)

            this.waitForElement(clionaObj.clionaOrder(unitPriceFormated).orderUnitPrice, timeWait.waitFor10s)
            this.see(unitPriceFormated, clionaObj.clionaOrder(unitPriceFormated).orderUnitPrice)

            this.waitForElement(clionaObj.clionaOrder(null, subtotalItemsFormated).orderSubtotalItems, timeWait.waitFor10s)
            this.see(subtotalItemsFormated, clionaObj.clionaOrder(null,subtotalItemsFormated).orderSubtotalItems)

        },
    });
}