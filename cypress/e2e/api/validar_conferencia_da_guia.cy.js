/// <reference types='cypress' />

describe('Validar rotas de conferência da guia da aplicação SIGPAE', () => {
	var usuario = Cypress.config('usuario_abastecimento')
	var senha = Cypress.config('senha')

	before(() => {
		cy.autenticar_login(usuario, senha)
	})

	context('Casos de teste para a rota api/conferencia-da-guia/', () => {
		it.only('Validar GET de conferencia da guia com sucesso', () => {
			cy.consultar_conferencia_da_guia().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body).to.have.property('count').that.exist
				expect(response.body).to.have.property('next').null
				expect(response.body).to.have.property('previous').null
				expect(response.body).to.have.property('results').that.is.an('array')
					.and.not.to.be.empty
				expect(response.body.results[0].criado_por).to.have.property('uuid')
					.that.exist
				expect(response.body.results[0].criado_por).to.have.property('cpf').that
					.exist
				expect(response.body.results[0].criado_por).to.have.property('nome')
					.that.exist
				expect(response.body.results[0].criado_por).to.have.property('email')
					.that.exist
				expect(response.body.results[0].criado_por).to.have.property(
					'date_joined',
				).that.exist
				expect(response.body.results[0].criado_por).to.have.property(
					'registro_funcional',
				).that.exist
				expect(response.body.results[0].criado_por).to.have.property(
					'tipo_usuario',
				).that.exist
				expect(response.body.results[0].criado_por).to.have.property('cargo')
					.that.exist
				expect(response.body.results[0]).to.have.property('criado_em').that
					.exist
				expect(response.body.results[0]).to.have.property('alterado_em').that
					.exist
				expect(response.body.results[0]).to.have.property('uuid').that.exist
				expect(response.body.results[0]).to.have.property('data_recebimento')
					.that.exist
				expect(response.body.results[0]).to.have.property('hora_recebimento')
					.that.exist
				expect(response.body.results[0]).to.have.property('nome_motorista').that
					.exist
				expect(response.body.results[0]).to.have.property('placa_veiculo').that
					.exist
				expect(response.body.results[0]).to.have.property('eh_reposicao').that
					.exist
				expect(response.body.results[0]).to.have.property('guia').that.exist
			})
		})

		it.only('Validar GET por UUID de conferencia da guia com sucesso', () => {
			var uuid = '2a69bc14-c0e8-43f8-b7d2-5cce299de4f4/'
			cy.consultar_por_id_conferencia_da_guia(uuid).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body.criado_por).to.have.property('uuid').that.exist
				expect(response.body.criado_por).to.have.property('cpf').that.exist
				expect(response.body.criado_por).to.have.property('nome').that.exist
				expect(response.body.criado_por).to.have.property('email').that.exist
				expect(response.body.criado_por).to.have.property('date_joined').that
					.exist
				expect(response.body.criado_por).to.have.property('registro_funcional')
					.that.exist
				expect(response.body.criado_por).to.have.property('tipo_usuario').that
					.exist
				expect(response.body.criado_por).to.have.property('cargo').that.exist
				expect(response.body).to.have.property('criado_em').that.exist
				expect(response.body).to.have.property('alterado_em').that.exist
				expect(response.body).to.have.property('uuid').that.exist
				expect(response.body).to.have.property('data_recebimento').that.exist
				expect(response.body).to.have.property('hora_recebimento').that.exist
				expect(response.body).to.have.property('nome_motorista').that.exist
				expect(response.body).to.have.property('placa_veiculo').that.exist
				expect(response.body).to.have.property('eh_reposicao').that.exist
				expect(response.body).to.have.property('guia').that.exist
			})
		})

		it.only('Validar GET por UUID de conferencia da guia com sucesso', () => {
			var uuid = '2a69bc14-c0e8-43f8-b7d2-5cce299de/'
			cy.validar_solicitacoes_dieta(uuid).then((response) => {
				expect(response.status).to.eq(404)
			})
		})
	})
})
