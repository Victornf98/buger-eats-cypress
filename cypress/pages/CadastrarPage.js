
class CadastrarPage {

    acessarNavegador() {
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats-qa.vercel.app/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    dadosFormulario(entregador) {
        cy.get('input[name="fullName"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereco.numero)
        cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

        cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereco.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + entregador.cnh)
    }

    submit() {
        cy.get('button[class="button-success"]').click()
    }

    validarTestes(expectedMessage) {
        cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage)
    }

    alertMessage(expectedMessage) {
        cy.get('.alert-error').should('have.text', expectedMessage)
    }

}
export default CadastrarPage;