import CadastrarPage from "../pages/CadastrarPage"

describe('cadastro', () => {

    var page = new CadastrarPage()

    beforeEach(function () {
        cy.fixture('massaDeTestes').then((m) => {
            this.massaDeTestes = m
        })
    })

    it('Preenchendo campos para concluir um cadastro', function () {

        page.acessarNavegador()
        page.dadosFormulario(this.massaDeTestes.cadastro_sucesso)
        page.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        page.validarTestes(expectedMessage)

    })

    it('Cpf inválido', function () {

        page.acessarNavegador()
        page.dadosFormulario(this.massaDeTestes.cpf_invalido)
        page.submit()
        page.alertMessage('Oops! CPF inválido')

    })

    it('Email inválido', function () {

        page.acessarNavegador()
        page.dadosFormulario(this.massaDeTestes.email_invalido)
        page.submit()
        page.alertMessage('Oops! Email com formato inválido.')

    })

})