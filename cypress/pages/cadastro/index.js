/// <reference types="cypress" />
class Cadastro {

    iniciaCadastro(existente){

        let email
        
        if (existente === true) {
            email = `j6Ezy@example.com`
            
        }else{
            const timestamp = new Date().getTime()
            email = `${timestamp}${Cypress.env('email')}`
        }

            cy.get('[data-qa="signup-name"]').type(Cypress.env('sigUpName'))
            cy.get('[data-qa="signup-email"]').type(`${email}`)
            cy.contains('button', 'Signup').click()
    }           
    
    preencherFormulario() {

        cy.get('input[type=radio').check('Mrs')
        cy.get('[type=password]').type('12345', { log: false })

        cy.get('[data-qa="days"]').select('5')
        cy.get('[data-qa="months"]').select('5')
        cy.get('[data-qa="years"]').select('1993')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type('Tester')
        cy.get('[data-qa="last_name"]').type('QA')
        cy.get('[data-qa="company"]').type('Tigrinho Tabajara')
        cy.get('[data-qa="address"]').type('rua treze, n 14')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('California')
        cy.get('[data-qa="city"]').type('San Francisco')
        cy.get('[data-qa="zipcode"]').type('12345')
        cy.get('[data-qa="mobile_number"]').type('1234567890')
        
        cy.get('[data-qa="create-account"]').click()

        cy.url().should('be.equal', 'https://automationexercise.com/account_created')

        cy.get('[data-qa="account-created"]').should('be.visible')

        cy.get('[data-qa="continue-button"]').click()
    }   

    validaUsuarioJaExistente(){
        cy.get('.signup-form form p').should('contain', 'Email Address already exist!').and('be.visible')
    }
    
}

export default new Cadastro()