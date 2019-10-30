class SignUp{

getSignUpButton(){
    return cy.get('.col-xs-3 > .btn')
}

getEmailInput() {
    return cy.get('.auth-form > .ng-valid-email')
}

getPasswordInput(){
    return cy.get('[name="password"]')
}

getConfirmPasswordInput() {
   return cy.get('[name="confirmPassword"]')
}

getFirstName() {
    return cy.get('[name="firstName"]')
}

getLastName() {
    return cy.get('[name="lastName"]')
}

getMarketingCheckBox() {
    return cy.get('.allow-marketing > .ng-pristine')
}

getSubmitUpButton() {
    return cy.get('.auth-form > .rm-btn-orange')
}

getErrorAlert() {
    return cy.get('.clearfix > .ng-binding')
}

}

export default SignUp