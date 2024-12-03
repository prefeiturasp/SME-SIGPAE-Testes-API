/// <reference types='cypress' />

describe('Validar rotas de alimentos da aplicação SIGPAE', () => {
	var usuario = Cypress.config('usuario')
	var senha = Cypress.config('senha')
	before(() => {
		cy.autenticar_login(usuario, senha)
	})

	context('Casos de teste para as rotas de aalimentos', () => {
		it('Validar GET de todos os alimentos do tipo Edital com sucesso', () => {
			var id = '?tipo=E'
			cy.validar_alimentos(id).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.be.an('array').and.not.to.be.empty
				const lista = response.body[0]
				expect(lista.ativo, 'O alimento deve estar ativo').to.be.true
				expect(lista).to.have.property('id').that.is.a('number')
				expect(lista).to.have.property('nome').that.is.a('string')
				expect(lista).to.have.property('outras_informacoes').that.is.a('string')
				expect(lista)
					.to.have.property('tipo_listagem_protocolo')
					.that.equals('SO_ALIMENTOS')
				expect(lista)
					.to.have.property('uuid')
					.that.is.a('string')
					.and.have.length.greaterThan(0)
				expect(lista.nome).to.eq('ABACATE')
			})
		})
		it('Validar GET de todos os alimentos do tipo Proprio com sucesso', () => {
			var id = '?tipo=P'
			cy.validar_alimentos(id).then((response) => {
				cy.log(response)
				expect(response.status).to.eq(200)
				expect(response.body).to.be.an('array').and.not.to.be.empty
				const lista = response.body[0]
				expect(lista.ativo, 'O alimento deve estar ativo').to.be.true
				expect(lista).to.have.property('id').that.is.a('number')
				expect(lista).to.have.property('nome').that.is.a('string')
				expect(lista).to.have.property('outras_informacoes').that.is.a('string')
				expect(lista)
					.to.have.property('tipo_listagem_protocolo')
					.that.equals('SO_ALIMENTOS')
				expect(lista)
					.to.have.property('uuid')
					.that.is.a('string')
					.and.have.length.greaterThan(0)
				expect(lista.nome).to.eq('Alga')
			})
		})
		it('Validar GET de todos os alimentos com sucesso', () => {
			var id = ''
			cy.validar_alimentos(id).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.be.an('array').and.not.to.be.empty
				const lista = response.body[0]
				expect(lista.ativo, 'O alimento deve estar ativo').to.be.true
				expect(lista).to.have.property('id').that.is.a('number')
				expect(lista).to.have.property('nome').that.is.a('string')
				expect(lista).to.have.property('outras_informacoes').that.is.a('string')
				expect(lista)
					.to.have.property('tipo_listagem_protocolo')
					.that.equals('SO_ALIMENTOS')
				expect(lista)
					.to.have.property('uuid')
					.that.is.a('string')
					.and.have.length.greaterThan(0)
				expect(lista.nome).to.eq('ABACATE')
			})
		})
		it('Validar GET com parametro invalido de alimento', () => {
			var id = '?tipo=batata'
			cy.validar_alimentos(id).then((response) => {
				expect(response.status).to.eq(400)
				expect(response.body).to.have.property('tipo')
				expect(response.body.tipo).to.be.an('array')
				expect(response.body.tipo[0]).to.be.eq(
					'Faça uma escolha válida. batata não é uma das escolhas disponíveis.',
				)
			})
		})
		it('Validar GET com parametro numerico invalido de alimento', () => {
			var id = '54'
			cy.validar_alimentos(id).then((response) => {
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
