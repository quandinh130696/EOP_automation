var vi = {
    orderGeneralColumnTitle: "//th[contains(text(),'Thông tin đơn hàng')]",
    statusOrderColumnTitle: "//th[contains(text(),'Trạng thái')]",
    orderProductColumnTitle: "//th[contains(text(),'Sản phẩm')]",
    orderAddressColumnTitle: "//th[contains(text(),'Thông tin giao hàng')]",
    orderTotalColumnTitle: "//th[contains(text(),'Tổng')]",
    comOrderColumnTitle: "//th[contains(text(),'Commission')]",
    chanenlColumnTitle: "//th[contains(text(),'Kênh')]",
    actionColumnTitle: "//th[contains(text(),'Hành động')]",
    orderStatus: "Đã xác nhận",
    labelByText: {
        orderGeneralColumnTitle_labelByText: "Thông tin đơn hàng",
        statusOrderColumnTitle_labelByText: "Trạng thái",
        orderProductColumnTitle_labelByText: "Sản phẩm",
        orderAddressColumnTitle_labelByText: "Thông tin giao hàng",
        orderTotalColumnTitle_labelByText: "Tổng",
        comOrderColumnTitle_labelByText: "Commission",
        chanenlColumnTitle_labelByText: "Kênh",
        actionColumnTitle_labelByText: "Hành động"
    }
}

function orderValidate(orderID, status, itemName, subtotal, vendor, street, district, total) {
    var orderInfor = {
        orderId: `//b[contains(text(),'${orderID}')]`,
        orderGeneral: `//td[@class="text-left text-middle" and .//b[contains(text(),'${orderID}')]]`,
        orderStatus: `//span[contains(text(),'${status}') and ../.././/b[contains(text(),'${orderID}')]]`,
        orderItems: `//b[contains(text(),'${itemName}') and ../../../..//b[contains(text(),'${orderID}')]]`,
        subTotal: `//span[contains(text(),'Sub Total: ${subtotal}') and ../../../..//b[contains(text(),'${orderID}')]]`,
        vendorOrder: `//i[contains(text(),'${vendor}') and ../..//b[contains(text(),'${orderID}')]]`,
        addressOrder: `//td[contains(text(),'${street}') and span[contains(text(),'${district}')] and ../..//b[contains(text(),'${orderID}')]]`,
        totalPayment: `//b[contains(text(),'${total}') and ../..//b[contains(text(),'${orderID}')]]`,
        editBtn: `//a[@class="btn btn-primary btn-sm" and ../..//b[contains(text(),'${orderID}')]]`,
        productListBtn: `//a[@title="Update Item" and ../..//b[contains(text(),'${orderID}')]]`,
    }

    return orderInfor;
}
module.exports = {
    vi,
    orderValidate
}

