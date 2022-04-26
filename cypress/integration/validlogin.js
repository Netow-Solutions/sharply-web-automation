import {login} from "../fixtures/selector.js";

export const validlogin = () => {
       
 
        it("LOGIN - should be able to login with valid details", function () {
                cy.visit("/")
                cy.get(login.emailInput).type(login.emailText)
                cy.get(login.passwordInput).type(login.passwordText)
                cy.get(login.logInButton).click()
            })
         
         
        }
        
