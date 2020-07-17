const loginPage = require('../objects/loginPage.json')

let orderID, orderAddProduct, langCheckWhileLogin, orderCreated

Feature("EOP Automation tests");

// BeforeSuite(async (I) => {
//     langCheckWhileLogin = await I.login(loginPage.email, loginPage.password)
// });

// Scenario("Order Fulfilment Accessing", async (I, OrderAccess) => {
//     OrderAccess.orderFulfilmentAccess(langCheckWhileLogin)
// })

// Scenario("Order Creation", async (I, OrderCreate) => {
//     await OrderCreate.fieldsVisible(langCheckWhileLogin)
//     orderCreated = await OrderCreate.orderCreation(langCheckWhileLogin)
//     console.log(orderCreated)
//     console.log(orderCreated.cusName.toString())
//     orderCreated.titleWithOrderId.then(x => orderID = x) 
// })

// Scenario("Add Product to Order", async (I, OrderAddProduct) => {
//     OrderAddProduct.addProductFieldsisVisible(langCheckWhileLogin)
//     orderAddProduct = await OrderAddProduct.addProductsToOrder(langCheckWhileLogin)
// })

// Scenario("Validate Order Created", (I, CreatedOrder) => {
//     CreatedOrder.orderCreatedColumnsVisible(langCheckWhileLogin)
//     await CreatedOrder.validateOrderCreated(orderID, orderAddProduct.subTotalItems, orderAddProduct.totalOrder, langCheckWhileLogin, orderCreated.cusName.toString())
// })

Scenario("Cliona Order Created", async (I, ClionaCreatedOrder) => {
   await ClionaCreatedOrder.orderClionaAccess()
   await ClionaCreatedOrder.orderClionaInputInfor()
})

// AfterSuite((I) => {
//     I.logOut()
// });
