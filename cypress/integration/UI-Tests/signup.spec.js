/// <reference types="Cypress" />



context('Login', () => {
    

    beforeEach(() => {
        cy.visit('https://www.rocketmiles.com/')
        cy.setCookie('EMAIL_SIGNUP', 'true')
        cy.wait(2000)
    })

    it('Signs up a new user', () => {
        cy.get('')
    })

})