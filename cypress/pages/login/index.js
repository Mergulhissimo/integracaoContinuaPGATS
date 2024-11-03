class Login {
    preencherLogin(email, password) {
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(password)
        cy.get('[data-qa="login-button"]').click()
    }

    acessarLogin() {
        cy.contains('Signup').click()
    }

    validaUsuarioLogado() {
        cy.get('i.fa-user').parent().should('contain', Cypress.env('sigUpName'))
    }

    validaLoginIncorreto() {
        cy.get('.login-form form p').should('contain', 'Your email or password is incorrect!')
    }

    realizaLogout() {
        cy.contains('Logout').click()
        cy.url().should('contain', 'login')
        cy.contains('Login to your account').should('be.visible')
    }
    validaUsuarioDeslogado() { 
        cy.get('i.fa-lock').parent().should('contain', 'Signup')
    }
}

export default new Login()