/// <reference types="Cypress" />



context('Login', () => {
    const uniqueEmail = 'samuelashirley' + Math.floor(100000 + Math.random() * 900000) + '@gmail.com'
    

    beforeEach(() => {
        cy.visit('https://www.rocketmiles.com/')
        cy.setCookie('EMAIL_SIGNUP', 'true')
        cy.wait(2000)
    })

    it('Signs up a new user', () => {
        cy.get('.homepage-navigation-links-wrapper > .ng-scope').click()
        cy.get('.col-xs-3 > .btn').click()
        cy.get('.auth-form > .ng-valid-email').type(uniqueEmail)
        cy.get('[name="password"]').type('Test123!')
        cy.get('[name="confirmPassword"]').type('Test123!')
        cy.get('[name="firstName"]').type('Sam')
        cy.get('[name="lastName"]').type('Test')
        cy.get('.allow-marketing > .ng-pristine').click()
        cy.get('.auth-form > .rm-btn-orange').click()
    })

    it('Logs in with Newly Created User', () => {
        cy.wait(4000) //Automation is too fast for Backend to recognize new user//
        cy.get('.homepage-navigation-links-wrapper > .ng-scope').click()
        cy.get('.auth-form > .ng-valid-email').type(uniqueEmail)
        cy.get('.input.ng-scope').type('Test123!')
        cy.get('.auth-form > .rm-btn-orange').click()
        cy.get('.btn-account > .hidden-xs').click()
        cy.get('.content-container > .content > :nth-child(1)').contains('Profile & Account')
    })

})