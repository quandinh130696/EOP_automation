const loginPage = require('../objects/loginPage.json')

let orderID
let orderAddProduct


Feature("EOP Automation tests");

BeforeSuite((I) => {
    I.login(loginPage.email, loginPage.password)
});

Scenario("Order Fulfilment Accessing", async (I, OrderAccess) => {
    OrderAccess.orderFulfilmentAccess()
})

Scenario("Order Creation", async (I, OrderCreate) => {
    OrderCreate.fieldsVisible()
    orderID = await OrderCreate.orderCreation()
})

Scenario("Add Product to Order", async (I, OrderAddProduct) => {
    OrderAddProduct.addProductFieldsisVisible()
    orderAddProduct = await OrderAddProduct.addProductsToOrder()
    console.log(orderAddProduct)
})

Scenario("Validate Order Created", (I, CreatedOrder) => {
    CreatedOrder.orderCreatedColumnsVisible()
    CreatedOrder.validateOrderCreated(orderID, orderAddProduct.subTotalItems, orderAddProduct.totalOrder)
})

AfterSuite((I) => {
    I.logOut()
});
