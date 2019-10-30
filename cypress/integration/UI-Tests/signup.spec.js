/// <reference types="Cypress" />
import Home from '../page-objects/home'
import SignUp from '../page-objects/sign-up-modal'



context('Login', () => {
    const uniqueEmail = 'samuelashirley' + Math.floor(100000 + Math.random() * 900000) + '@gmail.com'
    

    beforeEach(() => {
        cy.openPage()
    })

    it('checks error validation', function() {
        const home = new Home()
        const signUp = new SignUp()
        home.getSignUpButton().click()
        signUp.getSubmitUpButton().click()
        signUp.getErrorAlert().should('contain', 'We were not able to find a user with that email and password.')
    })

    it('signs up a new user', () => {
        const home = new Home()
        const signUp = new SignUp()
        home.getSignUpButton().click()
        signUp.getSignUpButton().click()
        signUp.getEmailInput().type(uniqueEmail).should('have.value', uniqueEmail)
        signUp.getPasswordInput().type('Test123!').should('have.value', 'Test123!')
        signUp.getConfirmPasswordInput().type('Test123!')
        signUp.getFirstName().type('Sam').should('have.value', 'Sam')
        signUp.getLastName().type('Test').should('have.value', 'Test')
        signUp.getMarketingCheckBox().click().should('not.be', 'checked')
        signUp.getSubmitUpButton().click()
    })

    it('logs in with Newly Created User', () => {
        cy.wait(4000) //Automation is too fast for Backend to recognize new user//
        cy.get('.homepage-navigation-links-wrapper > .ng-scope').click()
        cy.get('.auth-form > .ng-valid-email').type(uniqueEmail)
        cy.get('.input.ng-scope').type('Test123!')
        cy.get('.auth-form > .rm-btn-orange').click()
        cy.get('.btn-account > .hidden-xs').click()
        cy.get('.content-container > .content > :nth-child(1)').contains('Profile & Account')
    })

})