
// in this file you can append custom step methods to 'I' object
const loginObs = require('./objects/loginPage.json')
const timeWait = require('./wait_config/wait_config.json')

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    login: function (username, password) {
      this.amOnPage("/login")
      this.waitForVisible(loginObs.eopLogo, timeWait.waitFor30s)
      this.waitForElement(loginObs.emailLabel, timeWait.waitFor10s)
      this.waitForElement(loginObs.emailField, timeWait.waitFor10s)
      this.waitForElement(loginObs.passwordLabel, timeWait.waitFor10s)
      this.waitForElement(loginObs.passwordField, timeWait.waitFor10s)
      this.fillField(loginObs.emailField, username)
      this.fillField(loginObs.passwordField, password)
      this.waitForClickable(loginObs.loginBtn, timeWait.waitFor10s)
      this.click(loginObs.loginBtn)
      this.dontSeeElement("//div[@class='alert alert-danger']")
    },
    logOut: function () {
      this.amOnPage("/logout")
    }
  });
}
