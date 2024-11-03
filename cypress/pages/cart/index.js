import { faker } from '@faker-js/faker';

class Cart {
    acessaCarrinho() {
        cy.contains("View Cart").click()
    }

    acessaFinalizaCarrinho() {
        cy.get('.btn-default.check_out').should('be.visible')
        cy.get('.btn-default.check_out').click()
        cy.get(':nth-child(2) > .heading').should('have.text', 'Address Details')
        cy.get(':nth-child(4) > .heading').should('have.text', 'Review Your Order')
    }

    acessaFinalizaPedido(){
        cy.get('.btn-default.check_out').click()
    }

    preencheDadosPagamento(){
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type(12)
        cy.get('[data-qa="expiry-year"]').type(2035)
    }   

    finalizaPagamento(){
        cy.get('[data-qa="pay-button"]').click()
    }

    validaCompraEfetivada(){
        cy.get('[data-qa="order-placed"]').should('be.visible')
    }

}

export default new Cart()