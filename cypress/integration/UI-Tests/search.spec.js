/// <reference types="Cypress" />



context('Search', () => {
    

    beforeEach(() => {
        cy.visit('https://www.rocketmiles.com/')
        cy.setCookie('EMAIL_SIGNUP', 'true')
        
    })

    it('enters New York into location input', () => {
        cy.get('.location-search-container > .rm-input-base').click()
        cy.wait(500)
        cy.get('.location-search-container > .rm-input-base')
            .click()
            .type('{downarrow}')
            .wait(200)
            .type('{downarrow}')
            .wait(200)
            .type('{enter}')
        
        cy.get('.rm-btn-orange > .ng-scope').click()
    })
})