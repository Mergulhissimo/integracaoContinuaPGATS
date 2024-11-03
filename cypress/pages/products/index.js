class Products {
    acessarProdutos() {
        cy.contains('Products').click()
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('have.text', 'All Products')
    }

    validaTelaDetalhes() {
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
    }

    acessaPaginaDetalhes() {
        cy.contains('View Product').first().click()
    }

    buscaProduto(produto) {
        cy.get('input#search_product').type(produto)
        cy.get('button#submit_search').click()
    }

    validaBusca(){
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 1)
    }
    
    adicionaPrimeioProdutoCarrinho() {
        cy.contains("Add to cart").first().click()
    }
}

export default new Products()