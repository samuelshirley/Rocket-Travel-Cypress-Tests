/// <reference types="Cypress" />

import Home from "../page-objects/home"


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
        const home = new Home();
        home.getSignInButton().click()
        home.getHeaderText().should('contain','Sign In')
        home.getEmailField().type(this.secrets.email).should('have.value', this.secrets.email)
        home.getPasswordField().type(this.secrets.password).should('have.value', this.secrets.password)
        home.getSubmitButton().should('have.value', 'Sign In').click()
        home.getAccountButton().should('contain', 'Account').click()
        home.getAccountHeader().should('contain', 'Profile & Account')
        home.getFirstName().should('have.value', this.data.firstName)
        home.getLastName().should('have.value', this.data.lastName)
        home.getUserName().should('have.value', this.data.userName)
        home.getPromotionsCheckBox().should('not.be', 'checked')
    })

})