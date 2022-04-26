import {login,homepage} from "../fixtures/selector.js";
 
describe("login", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("LOGIN - Invalid Login", function () {
        cy.get(login.emailInput).type(login.emailText2)
        cy.get(login.passwordInput).type(login.passwordText)
        cy.get(login.logInButton).click()
    })

    it("LOGIN - Valid Login", function () {
        cy.get(login.emailInput).type(login.emailText)
        cy.get(login.passwordInput).type(login.passwordText)
        cy.get(login.logInButton).click()
    })
 
    it("LOGOUT - should be able to logout", function () {
        cy.get(login.emailInput).type(login.emailText)
        cy.get(login.passwordInput).type(login.passwordText)
        cy.get(login.logInButton).click()
        cy.get(homepage.settingBtn).click()
        cy.get(homepage.logoutBtn).click()
    })
 

})
