/// <reference types="Cypress" />

import Login from "../page-objects/login"


    describe('Login', () => {
        beforeEach(function () {
          cy.fixture('data')
            .then((data) => {
              this.data = data
            })
            cy.fixture('secrets')
            .then((secrets) => {
              this.secrets = secrets
            })
            cy.openPage()
        
    })

    it('Logs in a user', function () {
        const login = new Login();
        login.getSignInButton().click()
        login.getHeaderText().should('contain','Sign In')
        login.getEmailField().type(this.secrets.email).should('have.value', this.secrets.email)
        login.getPasswordField().type(this.secrets.password).should('have.value', this.secrets.password)
        login.getSubmitButton().should('have.value', 'Sign In').click()
        login.getAccountButton().should('contain', 'Account').click()
        login.getAccountHeader().should('contain', 'Profile & Account')
        login.getFirstName().should('have.value', this.data.firstName)
        login.getLastName().should('have.value', this.data.lastName)
        login.getUserName().should('have.value', this.data.getUserName)
       
    })

})