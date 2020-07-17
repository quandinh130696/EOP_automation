var clionaObj = require('../objects/clionaOrder')
var timeWait = require('../wait_config/wait_config.json')
var commonFunction = require('../common/commonFunction.js')

let unitPriceFormated, subtotalItemsFormated
let Province = clionaObj.clionaOrder().orderInputForm.province
let District = clionaObj.clionaOrder().orderInputForm.district
let Ward = clionaObj.clionaOrder().orderInputForm.ward
module.exports = function () {
    return actor({
        orderClionaAccess: async function () {
            unitPriceFormated = await commonFunction.clionaNumberFormat(clionaObj.productInfor.unitPrice)
            subtotalItemsFormated = await commonFunction.clionaNumberFormat(clionaObj.clionaOrder().clionaOrderInfor.subtotalItems)

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
            this.waitForElement(clionaObj.clionaOrder().clionaOrderInfor.headerCartCount, timeWait.waitFor10s)
            this.see(clionaObj.productInfor.quantity, clionaObj.clionaOrder().clionaOrderInfor.headerCartCount)
            this.waitForClickable(clionaObj.clionaPage.cart, timeWait.waitFor10s)
            this.click(clionaObj.clionaPage.cart)

            // validate cart car
            this.waitForElement(clionaObj.clionaOrder().clionaOrderInfor.orderItemName, timeWait.waitFor10s)
            this.see(clionaObj.productInfor.productName, clionaObj.clionaOrder().clionaOrderInfor.orderItemName)

            this.waitForElement(clionaObj.clionaOrder(unitPriceFormated).clionaOrderInfor.orderUnitPrice, timeWait.waitFor10s)
            this.see(unitPriceFormated, clionaObj.clionaOrder(unitPriceFormated).clionaOrderInfor.orderUnitPrice)

            this.waitForElement(clionaObj.clionaOrder(null, subtotalItemsFormated).clionaOrderInfor.orderSubtotalItems, timeWait.waitFor10s)
            this.see(subtotalItemsFormated, clionaObj.clionaOrder(null, subtotalItemsFormated).clionaOrderInfor.orderSubtotalItems)

            this.waitForElement(clionaObj.clionaOrder().clionaOrderInfor.totalOrder, timeWait.waitFor10s)
            this.see(subtotalItemsFormated, clionaObj.clionaOrder().clionaOrderInfor.totalOrder)

            // Click Tiến hành đặt hàng
            this.waitForClickable(clionaObj.clionaPage.submitOrderBtn, timeWait.waitFor10s)
            this.click(clionaObj.clionaPage.submitOrderBtn)
        },

        orderClionaInputInfor: async function () {
            // input name
            this.waitForElement(clionaObj.clionaOrder().orderInputForm.nameInput, timeWait.waitFor10s)
            this.fillField(clionaObj.clionaOrder().orderInputForm.nameInput, clionaObj.clionaOrder().orderInputForm.name)

            //input phone
            this.waitForElement(clionaObj.clionaOrder().orderInputForm.phoneInput, timeWait.waitFor10s)
            this.fillField(clionaObj.clionaOrder().orderInputForm.phoneInput, clionaObj.clionaOrder().orderInputForm.phone)

            // input email
            this.waitForElement(clionaObj.clionaOrder().orderInputForm.emailInput, timeWait.waitFor10s)
            this.fillField(clionaObj.clionaOrder().orderInputForm.emailInput, clionaObj.clionaOrder().orderInputForm.email)

            // select province
            this.waitForClickable(clionaObj.clionaOrder().orderInputForm.provinceSelectbox, timeWait.waitFor10s)
            this.click(clionaObj.clionaOrder().orderInputForm.provinceSelectbox)
            this.waitForText(Province, timeWait.waitFor10s)
            this.click(clionaObj.clionaOrder(null, null, Province).orderInputForm.provinceValue)

            // select district
            this.waitForClickable(clionaObj.clionaOrder().orderInputForm.districtSelectbox, timeWait.waitFor10s)
            this.click(clionaObj.clionaOrder().orderInputForm.districtSelectbox)
            this.waitForElement(clionaObj.clionaOrder().orderInputForm.searchField, timeWait.waitFor10s)
            this.fillField(clionaObj.clionaOrder().orderInputForm.searchField, District)
            this.waitForClickable(clionaObj.clionaOrder(null, null, null, District).orderInputForm.districtValue, timeWait.waitFor10s)
            this.click(clionaObj.clionaOrder(null, null, null, District).orderInputForm.districtValue)

            // select ward
            this.waitForClickable(clionaObj.clionaOrder().orderInputForm.wardSelectbox, timeWait.waitFor10s)
            this.click(clionaObj.clionaOrder().orderInputForm.wardSelectbox)
            this.waitForText(Ward, timeWait.waitFor10s)
            this.click(clionaObj.clionaOrder(null, null, null, null, Ward).orderInputForm.wardValue)

            // input address
            this.waitForElement(clionaObj.clionaOrder().orderInputForm.addressInput, timeWait.waitFor10s)
            this.fillField(clionaObj.clionaOrder().orderInputForm.addressInput, clionaObj.clionaOrder().orderInputForm.address)

            // check order free ship
            this.waitForElement(clionaObj.clionaOrder().clionaOrderInfor.shippingMethod, timeWait.waitFor10s)
            this.see("Giao hàng miễn phí", clionaObj.clionaOrder().clionaOrderInfor.shippingMethod)

            // check total order
            this.waitForElement(clionaObj.clionaOrder().clionaOrderInfor.totalOrder, timeWait.waitFor10s)
            this.see(subtotalItemsFormated, clionaObj.clionaOrder().clionaOrderInfor.totalOrder)

            // Click đặt mua ngay
            this.waitForClickable(clionaObj.clionaPage.buyBtn, timeWait.waitFor10s)
            this.click(clionaObj.clionaPage.buyBtn)

            // Sucessfully order
            this.waitForText("Cảm ơn", timeWait.waitFor10s)
            this.see("Cảm ơn")
            this.see("Bạn đã mua hàng tại cliona.vn")
            this.see("Thông tin chi tiết về đơn hàng đã được gửi đến địa chỉ mail ")
            this.see(clionaObj.clionaOrder().orderInputForm.email, `//span[contains(text(),'${clionaObj.clionaOrder().orderInputForm.email}')]`)

            let url = await this.grabCurrentUrl();

            let getClionaOrderID = await commonFunction.getClionaOrderId(url)
            getClionaOrderID = (parseInt(getClionaOrderID[0]))

            return getClionaOrderID;
        },
    });
}