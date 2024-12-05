/// <reference types='cypress' />

describe('Validar rotas de alimentos da guia da aplicação SIGPAE', () => {
	var usuario
	var senha
	var id
	before(() => {
		usuario = Cypress.config('usuario_coordenador_codae_dilog_logistica')
		senha = Cypress.config('senha')
		cy.autenticar_login(usuario, senha)
	})

	context('Casos de teste para a rota api/alimentos-da-guia/ GET', () => {
		it('Validar GET de todos os alimentos da guia com sucesso', () => {
			id = ''
			cy.validar_alimentos_da_guia(id).then((response) => {
				expect(response.body).to.have.property('count').that.exist
				expect(response.body).to.have.property('next').that.exist
				expect(response.body).to.have.property('previous')
				expect(response.body).to.have.property('results').that.is.an('array').and.not.to.be.empty
				const primeiro_resultado = response.body.results[0]
				expect(primeiro_resultado).to.have.property('alterado_em').that.exist
				expect(primeiro_resultado).to.have.property('codigo_papa').that.exist
				expect(primeiro_resultado).to.have.property('codigo_suprimento').that.exist
				expect(primeiro_resultado).to.have.property('criado_em').that.exist
				expect(primeiro_resultado).to.have.property('guia').that.exist
				expect(primeiro_resultado).to.have.property('nome_alimento').that.exist
				expect(primeiro_resultado).to.have.property('uuid').that.exist
			})
		})

		it('Validar GET com parametros limitados com sucesso', () => {
			id = '?limit=4&offset=5'
			cy.validar_alimentos_da_guia(id).then((response) => {
				expect(response.body).to.have.property('count').that.exist
				expect(response.body).to.have.property('next').that.exist
				expect(response.body).to.have.property('previous')
				expect(response.body).to.have.property('results').that.is.an('array').and.not.to.be.empty
				const primeiro_resultado = response.body.results[0]
				expect(primeiro_resultado).to.have.property('alterado_em').that.exist
				expect(primeiro_resultado).to.have.property('codigo_papa').that.exist
				expect(primeiro_resultado).to.have.property('codigo_suprimento').that.exist
				expect(primeiro_resultado).to.have.property('criado_em').that.exist
				expect(primeiro_resultado).to.have.property('guia').that.exist
				expect(primeiro_resultado).to.have.property('nome_alimento').that.exist
				expect(primeiro_resultado).to.have.property('uuid').that.exist
			})
		})

		it('Validar GET com parametros invalidos', () => {
			id = 'dgaugsusausay'
			cy.validar_alimentos_da_guia(id).then((response) => {
				expect(response.allRequestResponses[0]['Response Status']).to.eq(301)
				expect(response.status).to.eq(200)
				expect(response.body).to.exist
				expect(response.redirects[0]).to.contain('301:')
				expect(response.allRequestResponses).to.be.an('array').that.is.not.empty
				expect(response.allRequestResponses[0])
					.to.have.property('Response Status')
					.that.equals(301)
				expect(response.redirects).to.be.an('array').that.is.not.empty
			})
		})

		it('Validar que um usuário sem permissão não pode acessar o endpoint', () => {
			id = ''
			usuario = Cypress.config('usuario_coordenador_logistica')
			senha = Cypress.config('senha')
			cy.autenticar_login(usuario, senha)
			cy.validar_alimentos_da_guia(id).then((response) => {
				expect(response.status).to.eq(403)
				expect(response.body).to.have.property('detail').that.is.a('string')
				expect(response.body.detail).to.eq('Você não tem permissão para executar essa ação.')
			})
		})
	})

	context('Casos de teste para a rota api/alimentos-da-guia/uuid/ GET', () => {
		it('Validar GET com id de um unico alimentos da guia com sucesso', () => {
			id = 'b9a97cc1-f4dc-469d-be34-f63eb96bdbf4/'
			usuario = Cypress.config('usuario_coordenador_codae_dilog_logistica')
			senha = Cypress.config('senha')
			cy.autenticar_login(usuario, senha)
			cy.validar_alimentos_da_guia(id).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('alterado_em').that.exist
				expect(response.body).to.have.property('codigo_papa').that.exist
				expect(response.body).to.have.property('codigo_suprimento').that.exist
				expect(response.body).to.have.property('criado_em').that.exist
				expect(response.body).to.have.property('guia').that.exist
				expect(response.body).to.have.property('nome_alimento').that.exist
				expect(response.body).to.have.property('uuid').that.exist
			})
		})

		it('Validar GET com a rota sem a / no fim', () => {
			id = 'b9a97cc1-f4dc-469d-be34-f63eb96bdbf4'
			cy.validar_alimentos_da_guia(id).then((response) => {
				expect(response.allRequestResponses[0]['Response Status']).to.eq(301)
				expect(response.status).to.eq(200)
				expect(response.body).to.exist
				expect(response.redirects[0]).to.contain('301:')
				expect(response.allRequestResponses).to.be.an('array').that.is.not.empty
				expect(response.allRequestResponses[0])
					.to.have.property('Response Status')
					.that.equals(301)
				expect(response.redirects).to.be.an('array').that.is.not.empty
			})
		})

		it('Validar GET com o id invalido', () => {
			id = 'b9adscc1-fddc-46sd-b534-f63ebdsbdbf4'
			cy.validar_alimentos_da_guia(id).then((response) => {
				expect(response.allRequestResponses[0]['Response Status']).to.eq(301)
				expect(response.status).to.eq(200)
				expect(response.body).to.exist
				expect(response.redirects[0]).to.contain('301:')
				expect(response.allRequestResponses).to.be.an('array').that.is.not.empty
				expect(response.allRequestResponses[0])
					.to.have.property('Response Status')
					.that.equals(301)
				expect(response.redirects).to.be.an('array').that.is.not.empty
			})
		})

	})
})
