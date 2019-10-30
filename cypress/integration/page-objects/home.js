class Login {
    getSignInButton(){
        return cy.get('.homepage-navigation-links-wrapper > .ng-scope')
    }

    getHeaderText(){
        return cy.get('h3')
    }

    getEmailField(){
        return cy.get('.auth-form > .ng-valid-email')
    }
    getPasswordField(){
        return cy.get('.input.ng-scope')
    }

    getSubmitButton(){
        return cy.get('.auth-form > .rm-btn-orange')
    }

    getAccountButton(){
        return cy.get('.btn-account > .hidden-xs')
    }

    getAccountHeader() {
        return cy.get('.content-container > .content > :nth-child(1)')
    }

    getFirstName() {
        return cy.get('#firstName')
    }

    getLastName(){
        return cy.get('#lastName')
    }

    getUserName() {
        return cy.get('#username')
    }

    getPromotionsCheckBox() {
        return cy.get(':nth-child(1) > label > .box > .check')
    }

    getCityInput(){
        return cy.get('.location-search-container > .rm-input-base')
    }

    getRewardsInput(){
        return cy.get('.program-autosuggest-container > .rm-input-base')
    }

    getHeadline() {
        return cy.get('.homepage-headline')
    }

    getNumberOfGuests(){
        return cy.get('.adults > .rm-select-base > .btn-group > .btn > .value')
    }

    getSerchPropertiesButton(){
        return cy.get('.rm-btn-orange')
    }

    getRoomsDropDown(){
        return cy.get('.rooms > .rm-select-base > .btn-group > .btn')
    }

    getLocationInput() {
        return cy.get('.location-search-container > .rm-input-base')
    }

    getSignUpButton() {
        return cy.get('.homepage-navigation-links-wrapper > .ng-scope')
    }
}

export default Login;