/// <reference types='cypress' />

describe('Validar rotas de alimentos da guia da aplicação SIGPAE', () => {
	var usuario = Cypress.config('usuario')
	var senha = Cypress.config('senha')
	before(() => {
		cy.autenticar_login(usuario, senha)
	})

	context('Casos de teste para a rota api/alimentos-da-guia/', () => {
		it('Validar GET de todos os alimentos da guia com sucesso', () => {
			var id = ''
			cy.validar_alimentos_da_guia(id).then((response) => {
				cy.log(response)
			})
		})
	})
})
