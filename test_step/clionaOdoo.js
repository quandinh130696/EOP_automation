var odooObj = require('../objects/clionaOdoo')
var timeWait = require('../wait_config/wait_config.json')
var commonFunction = require('../common/commonFunction.js')

let unitPriceFormated, subtotalItemsFormated
let Province = clionaObj.clionaOrder().orderInputForm.province
let District = clionaObj.clionaOrder().orderInputForm.district
let Ward = clionaObj.clionaOrder().orderInputForm.ward
module.exports = function () {
    return actor({
        odooAccess: async function () {
            this.amOnPage(odooObj.odooAccess.url + `/web/login`)
            this.waitForElement(odooObj.odooAccess.emailField, timeWait.waitFor10s)
            this.waitForElement(odooObj.odooAccess.passwordField, timeWait.waitFor10s)
            this.fillField(odooObj.odooAccess.emailField, odooObj.odooAccess.username)
            this.fillField(odooObj.odooAccess.passwordField, odooObj.odooAccess.password)
            this.waitForClickable(odooObj.odooAccess.loginBtn, timeWait.waitFor10s)
            this.click(odooObj.odooAccess.loginBtn)
            this.dontSeeElement("//p[@class='alert alert-danger']")
        },

        checkClionaOrder: async function () {
            this.waitForClickable(odooObj.odooAccess.salesMenu, timeWait.waitFor10s)
            this.click(odooObj.odooAccess.salesMenu)
        },

    });
}