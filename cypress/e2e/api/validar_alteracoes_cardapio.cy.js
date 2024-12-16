/// <reference types='cypress' />

describe('Validar rotas de alteracoes cardapio da aplicação SIGPAE', () => {
	var usuario = Cypress.config('usuario_coordenador_logistica')
	var senha = Cypress.config('senha')
	before(() => {
		cy.autenticar_login(usuario, senha)
	})

	context('Casos de teste para a rota api/alteracoes_cardapio/', () => {

		it('Validar GET de alterações cardápio com sucesso', () => {
			var id = ''
			cy.validar_alteracoes_cardapio(id).then((response) => {
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

	context('Casos de teste para a rota api/alteracoes_cardapio/id/', () => {

		it('Validar usuario sem permissão de Get na rota api/alteracoes_cardapio/id/', () => {
			var id = '3f42cdc6-f524-4364-af62-13a831abae5d/'
			cy.validar_alteracoes_cardapio(id).then((response) => {
				expect(response.status).to.eq(403)
				expect(response.body.detail).to.eq('Você não tem permissão para executar essa ação.')

			})
		})

		it('Validar GET de alterações cardápio por id inválido', () => {
			var id = '3f42cdc6-f524-4364-af62-13a831abaecd/'
			usuario = Cypress.config('usuario_coordenador_supervisao_nutricao')
			senha = Cypress.config('senha')
			cy.autenticar_login(usuario, senha)
			cy.validar_alteracoes_cardapio(id).then((response) => {
				expect(response.status).to.eq(404)
				expect(response.statusText).to.eq('Not Found')
			})
		})

		it('Validar GET de alterações cardápio por id incompleto', () => {
			var id = '3f42cdc6-f524-4364-af62-13a831abae5d'
			usuario = Cypress.config('usuario_coordenador_supervisao_nutricao')
			senha = Cypress.config('senha')
			cy.autenticar_login(usuario, senha)
			cy.validar_alteracoes_cardapio(id).then((response) => {
				cy.log(response)
				expect(response.status).to.eq(200)
				expect(response.allRequestResponses[0]['Response Status']).to.eq(301)
				expect(response.redirects[0]).to.contains('301: https://hom-sigpae.')
			})
		})

		it('Validar GET de alterações cardápio por id com sucesso', () => {
			var id = '3f42cdc6-f524-4364-af62-13a831abae5d/'
			usuario = Cypress.config('usuario_coordenador_supervisao_nutricao')
			senha = Cypress.config('senha')
			cy.autenticar_login(usuario, senha)
			cy.validar_alteracoes_cardapio(id).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body.criado_em).to.exist
				expect(response.body.criado_por).to.exist
				expect(response.body.data_final).to.exist
				expect(response.body.datas_intervalo).to.be.an('array').that.is.not.empty
				expect(response.body.foi_solicitado_fora_do_prazo).to.eq(false)
				expect(response.body.id_externo).to.eq('3F42C')
				expect(response.body.logs).to.be.an('array').that.is.not.empty
				expect(response.body.motivo.ativo).to.eq(true)
				expect(response.body.motivo.nome).to.eq('RPL - Refeição por Lanche')
				expect(response.body.motivo.uuid).to.exist
				expect(response.body.observacao).to.exist
				expect(response.body.prioridade).to.exist
				expect(response.body.rastro_dre).to.exist
				expect(response.body.rastro_escola).to.exist
				expect(response.body.rastro_lote).to.exist
				expect(response.body.rastro_terceirizada.contatos).to.be.an('array').that.is.not.empty
				expect(response.body.rastro_terceirizada.contratos).to.be.an('array').that.is.not.empty
				expect(response.body.rastro_terceirizada.nome_fantasia).to.exist
				expect(response.body.rastro_terceirizada.uuid).to.exist
				expect(response.body.status).is.not.null
				expect(response.body.substituicoes).to.be.an('array').that.is.not.empty
				expect(response.body.terceirizada_conferiu_gestao).to.exist
			})
		})

	})

	context('Casos de teste para a rota api/alteracoes_cardapio/id/relatorio', () => {

		it('Validar GET de relatorio de alterações cardápio com sucesso', () => {
			var id = '3f42cdc6-f524-4364-af62-13a831abae5d'
			cy.validar_alteracoes_cardapio_relatorio(id).then((response) => {
				expect(response.status).to.eq(200)
				expect(response.allRequestResponses).to.be.an('array').that.is.not.empty
				expect(response.allRequestResponses[0]['Response Body']).to.contain('%PDF')
			})
		})

		it('Validar GET de relatorio de alterações cardápio com id inválido', () => {
			var id = '3f42cdc6-f524-4364-af62-13a831adde5d'
			cy.validar_alteracoes_cardapio_relatorio(id).then((response) => {
				expect(response.status).to.eq(404)
				expect(response.allRequestResponses).to.be.an('array').that.is.not.empty
				expect(response.statusText).to.eq('Not Found')
			})
		})

	})

	// context('Casos de teste para a rota /api/alteracoes-cardapio/com-lanche-do-mes-corrente/id', () => {

	// 	it.only('Validar GET lanche do mes corrente com sucesso', () => {
	// 		var id = 'e09ea350-7ffa-4f15-8ce3-8bae4bae2eb3/'
	// 		var usuario = Cypress.config('usuario_diretor_ue')
	// 		var senha = Cypress.config('senha')
	// 		cy.autenticar_login(usuario, senha)
	// 		cy.validar_alteracoes_cardapio_com_lanche_do_mes_corrente(id).then((response) => {
	// 			cy.log(response)
	// 		})
	// 	})
	// })

	context('Casos de teste para a rota /api/alteracoes-cardapio/com-lanche-do-mes-corrente/id', () => {

		it.only('Validar GET lanche do mes corrente com sucesso', () => {
			var usuario = Cypress.config('usuario_diretor_ue')
			var senha = Cypress.config('senha')
			cy.autenticar_login(usuario, senha)
			cy.validar_alteracoes_cardapio_minhas_solicitacoes().then((response) => {
				cy.log(response)
			})
		})
	})

})


