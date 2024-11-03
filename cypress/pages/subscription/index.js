class Subscription {
    subscreverEmail() {
        cy.get('input#susbscribe_email').scrollIntoView().type(`${Cypress.env('email')}`)
        cy.get('button#subscribe').click()
    }

    validaSubscricao() {
        cy.contains('You have been successfully subscribed!').should('be.visible')
    }
}

export default new Subscription()