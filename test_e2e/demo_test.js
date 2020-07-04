const loginPage = require('../objects/loginPage.json')

Feature("EOP Automation tests");

BeforeSuite((I) => {
    I.login(loginPage.email, loginPage.password)
});

Scenario("Order Fulfilment Accessing", async (I, OrderAccess) => {
    OrderAccess.orderFulfilmentAccess()
})

Scenario("Order Creation", async (I, OrderCreate) => {
    OrderCreate.fieldsVisible()
    OrderCreate.orderCreation()
})

Scenario("Add Product to Order", async (I, OrderCreate, OrderAddProduct) => {
    OrderAddProduct.addProductFieldsisVisible()
})

AfterSuite((I) => { 
    I.logOut()
});
