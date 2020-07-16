var productInfor = {
    keywords: `kem làm trắng mặt và toàn thân`,
    productName: `Kem Làm Trắng Mặt Và Toàn Thân Secret Key Snow White Milky Pack 200g`,
    unitPrice: 229000,
    quantity: 2
}

var clionaPage = {
    clionaURL: `https://staging.cliona.vn`,
    productSearchBar: `//input[@name='s']`,
    searchBtn: `//button[@type="submit" and ..//input[@name='s']]`,
    searchedProduct: `//p[contains(text(),'${productInfor.productName}')]`,
    addToCart: `//button[contains(text(),'Thêm vào giỏ')]`,
    cart: `//a[@class='shopping']`,
    quantityInput: `//input[@name="quantity"]`
}

function clionaOrder(unitPriceFormated, subtotalItemsFormated) {
    var clionaOrderInfor = {
        headerCartCount: `//span[@class='number']/span[@class='header-cart-count']`,
        orderItemName: `//td[contains(@class, 'product-name')]/a[contains(text(),'${productInfor.productName}')]`,
        orderUnitPrice: `//td[contains(@class, 'product-price')]/span[contains(text(),'${unitPriceFormated}') and //sup[contains(text(),'đ')] and //td[contains(@class, 'product-name')]/a[contains(text(),'${productInfor.productName}')]]`,
        orderSubtotalItems: `//td[contains(@class, 'product-subtotal')]/span[contains(text(),'${subtotalItemsFormated}') and //sup[contains(text(),'đ')] and //td[contains(@class, 'product-name')]/a[contains(text(),'${productInfor.productName}')]]`,
        subtotalItems: (productInfor.unitPrice * productInfor.quantity)
    }

    return clionaOrderInfor;
}


module.exports = {
    clionaPage,
    productInfor,
    clionaOrder
}

