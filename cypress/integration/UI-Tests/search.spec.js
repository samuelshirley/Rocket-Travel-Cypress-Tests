/// <reference types="Cypress" />



context('Search', () => {
    

    beforeEach(() => {
        cy.visit('https://www.rocketmiles.com/')
        cy.setCookie('EMAIL_SIGNUP', 'true')
        cy.wait(2000)
    })

    it('Fills out search with New York and Amazon Rewards', () => {
        cy.get('.location-search-container > .rm-input-base')
            .click()
            .wait(1000)
            .type('{downarrow}')
            .wait(500)
            .type('{downarrow}')
            .wait(500)
            .type('{enter}')
        cy.get('.program-autosuggest-container > .rm-input-base')
            .click()
            .type('{downarrow}')
            .type('{enter}')
            cy.get('.rm-btn-orange > .ng-scope').click()
    })
})