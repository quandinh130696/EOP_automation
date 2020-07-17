var date = new Date();
var random = date.getTime();

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
    quantityInput: `//input[@name="quantity"]`,
    submitOrderBtn: `//a[contains(text(),'Tiến hành đặt hàng')]`,
    buyBtn: `//a[@class='ws-checkout--buy text-uppercase']`
}

function clionaOrder(unitPriceFormated, subtotalItemsFormated, Province, District, Ward) {
    var clionaOrderInfor = {
        headerCartCount: `//span[@class='number']/span[@class='header-cart-count']`,
        orderItemName: `//td[contains(@class, 'product-name')]/a[contains(text(),'${productInfor.productName}')]`,
        orderUnitPrice: `//td[contains(@class, 'product-price')]/span[contains(text(),'${unitPriceFormated}') and //sup[contains(text(),'đ')] and //td[contains(@class, 'product-name')]/a[contains(text(),'${productInfor.productName}')]]`,
        orderSubtotalItems: `//td[contains(@class, 'product-subtotal')]/span[contains(text(),'${subtotalItemsFormated}') and //sup[contains(text(),'đ')] and //td[contains(@class, 'product-name')]/a[contains(text(),'${productInfor.productName}')]]`,
        subtotalItems: (productInfor.unitPrice * productInfor.quantity),
        shippingMethod: `//ul[@id="shipping_method"]`,
        totalOrder: `//tr[@class="order-total"]`
    }

    var orderInputForm = {
        nameInput: `//input[@id="billing_last_name"]`,
        phoneInput: `//input[@id="billing_phone"]`,
        emailInput: `//input[@id="billing_email"]`,
        provinceSelectbox: `//p[@id='billing_state_field']//span[@class='select2-selection select2-selection--single']`,
        provinceValue: `//li[contains(text(),'${Province}')]`,
        districtSelectbox: `//p[@id='billing_city_field']//span[@class='select2-selection select2-selection--single']`,
        districtValue: `//li[contains(text(),'${District}')]`,
        wardSelectbox: `//span[@id='select2-billing_address_2-container']//span[@class='select2-selection__placeholder']`,
        addressInput: `//input[@id='billing_address_1']`,
        wardValue: `//li[contains(text(),'${Ward}')]`,
        searchField: `//input[@class='select2-search__field']`,

        name: `Nguyễn Đình Quân test`,
        phone: `0123456789`,
        email: `test${random}@gmail.com`,
        province: `Hà Nội`,
        district: `Quận Hai Bà Trưng`,
        ward: `Phường Bách Khoa`,
        address: `37 Ta Quang Buu`

    }

    return { clionaOrderInfor, orderInputForm };
}


module.exports = {
    clionaPage,
    productInfor,
    clionaOrder
}

