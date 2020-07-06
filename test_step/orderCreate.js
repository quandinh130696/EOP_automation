const orderCreate = require('../objects/orderFulfilmentCreateForm.json')
const timeWait = require('../wait_config/wait_config.json')

module.exports = function () {
    return actor({
        fieldsVisible: async function () {
            // Validate all the Labels and Components ara visiable
            this.waitForElement(orderCreate.vi.phoneLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.phone_labelByText, orderCreate.vi.phoneLabel)
            this.waitForElement(orderCreate.vi.fullNameLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.fullName_labelByText, orderCreate.vi.fullNameLabel)
            this.waitForElement(orderCreate.vi.nationLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.nation_labelByText, orderCreate.vi.nationLabel)
            this.waitForElement(orderCreate.vi.nationSelection, timeWait.waitFor10s)
            this.seeElement(orderCreate.vi.nationSelection)
            this.waitForElement(orderCreate.vi.provinceSelection, timeWait.waitFor10s)
            this.seeElement(orderCreate.vi.provinceSelection)
            this.waitForElement(orderCreate.vi.districtSelection, timeWait.waitFor10s)
            this.seeElement(orderCreate.vi.districtSelection)
            this.waitForElement(orderCreate.vi.addressLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.address_labelByText, orderCreate.vi.addressLabel)
            this.waitForElement(orderCreate.vi.adminNoteLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.adminNote_labelByText, orderCreate.vi.adminNoteLabel)
            this.waitForElement(orderCreate.vi.paymentMethodLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.paymentMethod_labelByText, orderCreate.vi.paymentMethodLabel)
            this.waitForElement(orderCreate.vi.prePaidLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.prePaid_labelByText, orderCreate.vi.prePaidLabel)
            this.seeInField(orderCreate.vi.prePaidField, "0")
            this.waitForElement(orderCreate.vi.orderReasonLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.orderReason_labelByText, orderCreate.vi.orderReasonLabel)
            this.waitForElement(orderCreate.vi.reasonDetailsLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.reasonDetails_labelByText, orderCreate.vi.reasonDetailsLabel)
            this.waitForElement(orderCreate.vi.orderSourceLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.orderSource_labelByText, orderCreate.vi.orderSourceLabel)
            this.waitForElement(orderCreate.vi.orderVendorLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.vendor_labelByText, orderCreate.vi.orderVendorLabel)
            this.waitForElement(orderCreate.vi.orderInluencerLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.inluencer_labelByText, orderCreate.vi.orderInluencerLabel)
            this.waitForElement(orderCreate.vi.orderFanpageLabel, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.fanpage_labelByText, orderCreate.vi.orderFanpageLabel)
        },

        orderCreation: async function () {
            this.fillField(orderCreate.vi.orderPhoneField, orderCreate.orderInput.phone)
            this.fillField(orderCreate.vi.fullNameField, orderCreate.orderInput.cusName)

            // Select Nation
            this.click(orderCreate.vi.nationSelection)
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
            this.click(orderCreate.vi.provinceSelection)
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
            this.click(orderCreate.vi.districtSelection)
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

            this.fillField(orderCreate.vi.orderAddressField, orderCreate.orderInput.address)
            this.fillField(orderCreate.vi.adminNoteField, orderCreate.orderInput.adminNote)

            // Select Order Reasons
            this.click(orderCreate.vi.orderReasonField)
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

            this.fillField(orderCreate.vi.reasonDetailsField, orderCreate.orderInput.reasonDetails)

            // Select Order Source
            this.click(orderCreate.vi.orderSourceField)
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
            this.click(orderCreate.vi.orderVendorField)
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
            this.click(orderCreate.vi.orderInluencerField)
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

            this.scrollPageToBottom()

            this.click(orderCreate.vi.saveBtn)

            // Validate turn to Step 2 successfully
            this.waitForElement(orderCreate.vi.turnToStep2, timeWait.waitFor10s)
            this.see(orderCreate.vi.labelByText.turnToStep2_labelByText, orderCreate.vi.turnToStep2)
        }
    });
}
