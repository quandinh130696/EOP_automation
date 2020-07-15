const orderCreate = require('../objects/orderFulfilmentCreateForm.json')
const timeWait = require('../wait_config/wait_config.json')
var commonFunction = require('../common/commonFunction.js')

module.exports = function () {
    return actor({
        fieldsVisible: async function (lang) {
            // Validate all the Labels and Components ara visiable
            this.waitForElement(orderCreate[lang].phoneLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.phone_labelByText, orderCreate[lang].phoneLabel)
            this.waitForElement(orderCreate[lang].fullNameLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.fullName_labelByText, orderCreate[lang].fullNameLabel)
            this.waitForElement(orderCreate[lang].nationLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.nation_labelByText, orderCreate[lang].nationLabel)
            this.waitForElement(orderCreate[lang].nationSelection, timeWait.waitFor10s)
            this.seeElement(orderCreate[lang].nationSelection)
            this.waitForElement(orderCreate[lang].provinceSelection, timeWait.waitFor10s)
            this.seeElement(orderCreate[lang].provinceSelection)
            this.waitForElement(orderCreate[lang].districtSelection, timeWait.waitFor10s)
            this.seeElement(orderCreate[lang].districtSelection)
            this.waitForElement(orderCreate[lang].addressLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.address_labelByText, orderCreate[lang].addressLabel)
            this.waitForElement(orderCreate[lang].adminNoteLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.adminNote_labelByText, orderCreate[lang].adminNoteLabel)
            this.waitForElement(orderCreate[lang].paymentMethodLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.paymentMethod_labelByText, orderCreate[lang].paymentMethodLabel)
            this.waitForElement(orderCreate[lang].prePaidLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.prePaid_labelByText, orderCreate[lang].prePaidLabel)
            this.seeInField(orderCreate[lang].prePaidField, "0")
            this.waitForElement(orderCreate[lang].orderReasonLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.orderReason_labelByText, orderCreate[lang].orderReasonLabel)
            this.waitForElement(orderCreate[lang].reasonDetailsLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.reasonDetails_labelByText, orderCreate[lang].reasonDetailsLabel)
            this.waitForElement(orderCreate[lang].orderSourceLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.orderSource_labelByText, orderCreate[lang].orderSourceLabel)
            this.waitForElement(orderCreate[lang].orderVendorLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.vendor_labelByText, orderCreate[lang].orderVendorLabel)
            this.waitForElement(orderCreate[lang].orderInluencerLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.inluencer_labelByText, orderCreate[lang].orderInluencerLabel)
            this.waitForElement(orderCreate[lang].orderFanpageLabel, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.fanpage_labelByText, orderCreate[lang].orderFanpageLabel)
        },

        orderCreation: async function (lang) {
           await this.fillField(orderCreate[lang].orderPhoneField, orderCreate.orderInput.phone)
        //    await this.fillField(orderCreate[lang].fullNameField, orderCreate.orderInput.cusName)

            // Select Nation
            this.click(orderCreate[lang].nationSelection)
            this.waitForElement(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.nation
                + orderCreate.orderInput.closeText, timeWait.waitFor10s
            )
            this.click(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.nation
                + orderCreate.orderInput.closeText
            )
            this.wait(1)

            // Select Province
            this.click(orderCreate[lang].provinceSelection)
            this.waitForElement(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.province
                + orderCreate.orderInput.closeText, timeWait.waitFor10s
            )
            this.click(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.province
                + orderCreate.orderInput.closeText
            )
            this.wait(1)

            // Search and Select District
            this.click(orderCreate[lang].districtSelection)
            this.waitForElement(
                orderCreate.orderInput.selectionInputField
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.district
                + orderCreate.orderInput.closeText + "]", timeWait.waitFor10s)
            this.fillField(
                orderCreate.orderInput.selectionInputField
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.district
                + orderCreate.orderInput.closeText + "]", orderCreate.orderInput.district
            )
            this.waitForElement(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andSpanText
                + orderCreate.orderInput.district
                + orderCreate.orderInput.closeText + "]", timeWait.waitFor10s
            )
            this.click(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andSpanText
                + orderCreate.orderInput.district
                + orderCreate.orderInput.closeText + "]"
            )
            this.wait(1)
            this.fillField(orderCreate[lang].orderAddressField, orderCreate.orderInput.address)
            this.fillField(orderCreate[lang].adminNoteField, orderCreate.orderInput.adminNote)

            // Select Order Reasons
            this.click(orderCreate[lang].orderReasonField)
            this.waitForElement(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.orderReason
                + orderCreate.orderInput.closeText, timeWait.waitFor10s
            )
            this.click(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.orderReason
                + orderCreate.orderInput.closeText
            )
            this.wait(1)
            this.fillField(orderCreate[lang].reasonDetailsField, orderCreate.orderInput.reasonDetails)

            // Select Order Source
            this.click(orderCreate[lang].orderSourceField)
            this.waitForElement(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.source
                + orderCreate.orderInput.closeText, timeWait.waitFor10s
            )
            this.click(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.source
                + orderCreate.orderInput.closeText
            )
            this.wait(1)

            //Search and select Vendor
            this.click(orderCreate[lang].orderVendorField)
            this.waitForElement(
                orderCreate.orderInput.selectionInputField
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.vendor
                + orderCreate.orderInput.closeText + "]", timeWait.waitFor10s)
            this.fillField(
                orderCreate.orderInput.selectionInputField
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.vendor
                + orderCreate.orderInput.closeText + "]", orderCreate.orderInput.vendor
            )
            this.waitForElement(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andSpanText
                + orderCreate.orderInput.vendor
                + orderCreate.orderInput.closeText + "]", timeWait.waitFor10s
            )
            this.click(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andSpanText
                + orderCreate.orderInput.vendor
                + orderCreate.orderInput.closeText + "]"
            )
            this.wait(1)

            //Select inluencer
            this.click(orderCreate[lang].orderInluencerField)
            this.waitForElement(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.inluencer
                + orderCreate.orderInput.closeText, timeWait.waitFor10s
            )
            this.click(
                orderCreate.orderInput.options
                + orderCreate.orderInput.andText
                + orderCreate.orderInput.inluencer
                + orderCreate.orderInput.closeText
            )
            this.wait(1)

            let cusName = await this.grabValueFrom(orderCreate[lang].fullNameField);
            this.scrollPageToBottom()
            this.click(orderCreate[lang].saveBtn)

            // Validate turn to Step 2 successfully
            this.waitForElement(orderCreate[lang].turnToStep2, timeWait.waitFor10s)
            this.see(orderCreate[lang].labelByText.turnToStep2_labelByText, orderCreate[lang].turnToStep2)
            let titleWithOrderId = await this.grabTextFrom(orderCreate[lang].titleWithOrderId);
            titleWithOrderId = commonFunction.getOrderId(titleWithOrderId)
        

            
            return {titleWithOrderId, cusName}
        }
    });
    
}
