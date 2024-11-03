/// <reference types="cypress" />
import cadastro from '../pages/cadastro'
import login from '../pages/login'
import contato from '../pages/contact'
import produto from '../pages/products'
import subscricao from '../pages/subscription';
import carrinho from '../pages/cart';


describe('Trabalho de Automação Web - PGATS', () => {
    
    before(() => {
        const signUpName = 'Tester QA'
        const email = `j6Ezy@example.com`
        Cypress.env('sigUpName', signUpName)
        Cypress.env('email', email)

    })

    beforeEach(() => {
        cy.visit('/')
    })
        

    it('TC1 - Cadastrar usuário', () => {

        login.acessarLogin()
        cadastro.iniciaCadastro(false)
        cadastro.preencherFormulario()
        login.validaUsuarioLogado()
        
        });

    it('TC2 - Logar usuário com email correto e senha correta', () => {

        login.acessarLogin()
        login.preencherLogin(`j6Ezy@example.com`, '12345')
        login.validaUsuarioLogado()

        });

    it('TC3 - Logar usuário com email incorreto e senha incorreta', () => {
        login.acessarLogin()
        login.preencherLogin(`j6Ezy@example.com`, '54321')
        login.validaLoginIncorreto()
        });

    it('TC4 - Deslogar usuário', () => {
        login.acessarLogin()
        login.preencherLogin(`j6Ezy@example.com`, '12345')
        login.validaUsuarioLogado()
        login.realizaLogout()
        login.validaUsuarioDeslogado()
        });

    it('TC5 - Registrar usuário com email ja existente', () => {
        login.acessarLogin()

        cadastro.iniciaCadastro(true)
        cadastro.validaUsuarioJaExistente()
        });

    it('TC6 - Acessar e preencher formulário de Contato', () => {
        contato.acessarContactForm()
        contato.preencherContactForm()
        contato.validaMensagemSucesso()
        });

    it('TC8 - Acessar lista de produtos e verificar detalhes de produtos', () => {
        produto.acessarProdutos()
        produto.acessaPaginaDetalhes()
        produto.validaTelaDetalhes()   
    })

    it('TC9 - Buscar produtos', () => {
        produto.acessarProdutos()        
        produto.buscaProduto('Shirt')
        produto.validaBusca()
    })

    it('TC10 - Verificar subscricão de e-mail', () => {
        subscricao.subscreverEmail()
        subscricao.validaSubscricao()
    })

    it('TC15 - Realizar pedido depois do cadastro de usuário', () => {
       
        login.acessarLogin()

        cadastro.iniciaCadastro()
        cadastro.preencherFormulario()

        login.validaUsuarioLogado()

        produto.adicionaPrimeioProdutoCarrinho()

        carrinho.acessaCarrinho()
        carrinho.acessaFinalizaCarrinho()
        carrinho.acessaFinalizaPedido()
        carrinho.preencheDadosPagamento()
        carrinho.finalizaPagamento()
        carrinho.validaCompraEfetivada()
    })

})