var date = new Date();
var random = date.getTime();

var odooAccess = {
    username: `quannd@ecomobi.com`,
    password: `Plan@2020`,
    emailField: `//input[@id='login']`,
    passwordField: `//input[@id='password']`,
    loginBtn: `//button[@class='btn btn-primary btn-block']`,
    url: `https://erp.staging.ecomobi.com`,
    salesMenu: `//div[contains(text(),'Sales')]`
}



module.exports = {
    odooAccess
}

