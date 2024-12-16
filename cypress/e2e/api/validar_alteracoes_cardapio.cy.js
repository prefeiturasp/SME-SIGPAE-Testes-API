/// <reference types='cypress' />

describe('Validar rotas de alteracoes cardapio da aplicação SIGPAE', () => {
	var usuario = Cypress.config('usuario_coordenador_logistica')
	var senha = Cypress.config('senha')
	before(() => {
		cy.autenticar_login(usuario, senha)
	})

	context('Casos de teste para as rotas de GET da api/alteracoes_cardapio/', () => {

		it('Validar GET de alterações cardápio com sucesso', () => {
			cy.validar_alteracoes_cardapio().then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body.count).to.exist

				const results = response.body.results
				expect(results).to.exist

				results.forEach((result) => {
					const escola = result.escola
					const lote = escola.lote
					const contratos = lote.contratos_do_lote
					const datasIntervalo = result.datas_intervalo

					expect(escola.codigo_eol).to.exist
					expect(escola.nome).to.exist

					expect(lote.nome).to.exist
					contratos.forEach((contrato) => {
						expect(contrato.uuid).to.exist
					})

					datasIntervalo.forEach((data) => {
						expect(data.alteracao_cardapio).to.exist
					})

				})
			})
		})
	})
})
