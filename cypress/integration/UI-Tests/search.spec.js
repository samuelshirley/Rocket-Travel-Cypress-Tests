/// <reference types="Cypress" />
import Home from '../page-objects/home'

context('Search', () => {
    

    beforeEach(() => {
        cy.openPage()
    })

    it('Fills out search with New York and Amazon Rewards', function() {
        const home = new Home()
        home.getHeadline().should('contain', 'Book hotels. Earn thousands of miles or points per night.')
        home.getCityInput()
            .click()
            .wait(1000)
            .type('{downarrow}')
            .wait(500)
            .type('{downarrow}')
            .wait(500)
            .type('{enter}')
            .should('have.value', 'New York, NY')
            
        home.getRewardsInput()
            .click()
            .type('{downarrow}')
            .type('{enter}')
            .should('have.value', 'Amazon.com Gift Card')
        home.getNumberOfGuests().should('have.text', '2 Guests')
        home.getRoomsDropDown().should('have.text', '1 Room')
        home.getSerchPropertiesButton().click()
        home.getLocationInput().should('have.value', 'New York, NY')
        
    })
})