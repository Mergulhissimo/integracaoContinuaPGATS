class Contact {
    acessarContactForm() {
        cy.contains('Contact us').click()
        cy.get('.contact-form h2').should('be.visible').and('have.text', 'Get In Touch')
    }

    preencherContactForm() {
        cy.get('[data-qa="name"]').type('Tester QA')
        cy.get('[data-qa="email"]').type(`j6Ezy@example.com`)
        cy.get('[data-qa="subject"]').type('Test Subject')
        cy.get('[data-qa="message"]').type('Test Message')

        cy.fixture('example.json').as('file')
        cy.get('input[name="upload_file"]').selectFile('@file')

        cy.get('[data-qa="submit-button"]').click()
    }

    validaMensagemSucesso() {
        cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')
    }

}

export default new Contact()