/// <reference types='cypress' />

Cypress.Commands.add('validar_alteracoes_cardapio', (id) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + `api/alteracoes-cardapio/${id}`,
		timeout: 60000,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_alteracoes_cardapio_relatorio', (id) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + `api/alteracoes-cardapio/${id}/relatorio/`,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_alteracoes_cardapio_com_lanche_do_mes_corrente', (id) => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + `api/alteracoes-cardapio/com-lanche-do-mes-corrente/${id}`,
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})

Cypress.Commands.add('validar_alteracoes_cardapio_minhas_solicitacoes', () => {
	cy.request({
		method: 'GET',
		url: Cypress.config('baseUrl') + 'api/alteracoes-cardapio/minhas-solicitacoes/',
		headers: {
			Authorization: 'JWT ' + globalThis.token,
		},
		failOnStatusCode: false,
	})
})