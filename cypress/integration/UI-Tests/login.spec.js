/// <reference types="Cypress" />



context('Login', () => {
    

    beforeEach(() => {
        cy.visit('https://www.rocketmiles.com/')
        cy.setCookie('EMAIL_SIGNUP', 'true')
        cy.wait(2000)
    })

    it('Logs in a user', () => {
        cy.get('.homepage-navigation-links-wrapper > .ng-scope').click()
        cy.get('.auth-form > .ng-valid-email').type('samuelashirley@gmail.com')
        cy.get('.input.ng-scope').type('Test123!')
        cy.get('.auth-form > .rm-btn-orange').click()
        cy.get('.btn-account > .hidden-xs').click()
        cy.get('.content-container > .content > :nth-child(1)').contains('Profile & Account')
    })

})