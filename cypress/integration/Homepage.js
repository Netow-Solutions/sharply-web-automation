import {login,homepage} from "../fixtures/selector.js";

describe("login", function () {
    beforeEach(function () {
        cy.visit('/')
        cy.get(login.emailInput).type(login.emailText)
        cy.get(login.passwordInput).type(login.passwordText)
        cy.get(login.logInButton).click()

    });

    it("HOMEPAGE - Navigate between Active, Complete and total orders card ", function () {
        cy.get(homepage.completedOrders).click()
        cy.get(homepage.totalOrders).click()
        cy.get(homepage.activeOrders).click()
    })

    it("HOMEPAGE- View homepage cards", function () {
        cy.get(homepage.viewOrders).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewRiders).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewCustomer).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewAnalytics).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
        cy.get(homepage.viewSettings).click()
        cy.wait(3000)
        cy.get(homepage.backBtn).click()
    })
 

})