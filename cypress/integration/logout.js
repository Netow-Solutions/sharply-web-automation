import {homepage} from "../fixtures/selector.js";


    const access = require("./validlogin.js");

    it("LOGIN - Should be able to login", function () {
          cy.visit("/")
         access.validlogin();

    })
 
        it("LOGOUT - should be able to logout", function () {
                cy.get(homepage.settingBtn).click()
                cy.get(homepage.logoutBtn).click()
            })
         
        
    
        