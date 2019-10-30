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
}

export default Login;