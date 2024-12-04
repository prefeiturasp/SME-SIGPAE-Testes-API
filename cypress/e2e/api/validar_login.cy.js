/// <reference types='cypress' />

describe('Validar rotas de login da aplicação SIGPAE', () => {
	context('Casos de teste para a rota api/login/', () => {
		it('Validar login realizado com sucesso', () => {
			var usuario = Cypress.config('usuario')
			var senha = Cypress.config('senha')
			cy.autenticar_login(usuario, senha).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.statusText).to.eq('OK')
				expect(response.allRequestResponses[0]['Response Body'].access).to.exist
			})
		})
	})
})
